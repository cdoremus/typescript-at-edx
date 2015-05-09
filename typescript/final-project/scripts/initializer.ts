var famousPainters: FamousPainters;

var renderer = null;

window.onload = () => { 
    try {
        var categoriesSelect = (<HTMLSelectElement> document.getElementById('PainterSelect'));

        console.log("categoriesSelect instantiated: " + categoriesSelect);

        renderer = new Renderer();

        //FROM MODULES 6-8
        //categoriesSelect.onchange currently doesn't do anything.
        //Assign a lambda expression to "onchange" that when called, 
        //invokes the "loadRecipes" function that you'll see below. 
        //The lambda parentheses will be empty.
        //HINT: Refer to Module 4:Functions if you need help writing the lambda.
        categoriesSelect.onchange = () => loadPainters();
        console.log("categoriesSelect onchange called");

        //FROM MODULES 6-8
        //Create a new RecipeLoader instance and name it "loader".
        //Pass the following string into the RecipeLoader's constructor:
        //  '/JSON/recipeTypes.json'
        //HINT: Use the "new" keyword to create the instance.
        var loader = new PainterLoader('/JSON/famousPainters.json');

        //FROM MODULE 6 
        //Call the loader object's load() function ("loader" is the object 
        //you created in the previous TODO)
        loader.load();

        console.log("categoriesSelect loaded: " + categoriesSelect.value);

    } catch (e) {
        console.log("Error in onload");
        console.log(e.message);
    }

};

function loadPainters() {
    var el = (<HTMLSelectElement> document.getElementById('PainterSelect'));
    try {
        var category = famousPainters.items
            //Find selected item by name
            .filter(item => item.name === el.value)
            //return the item
            .reduce(item => new FamousPainter({
                name: el.value,
                style: item.style,
                examples: item.examples,
                birthplace: item.birthplace,
                nationality: item.nationality,
                birthdate: item.birthdate
            }));
        renderer.renderCategory(category);
    }
    catch (ex) { 
        console.log("Problem in loadPainters()");
        console.log(ex.message) 
    }
}
  




