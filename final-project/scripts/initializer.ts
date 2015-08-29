//FamousPainters holds the collection of FamousPainter entities
var famousPainters: FamousPainters;

var renderer = null;

window.onload = () => { 
    try {
        //instantiate  the renderer
        renderer = new Renderer();

        //Get a reference to the HTML select element that is used to select a painter
        var categoriesSelect = (<HTMLSelectElement> document.getElementById('PainterSelect'));
//        console.log("categoriesSelect instantiated: " + categoriesSelect);

        //Set the loadPainters() function as the onChange event handler
        //  so that the page can be updated with data when a new 
        //  painter is selected from the drop down
        categoriesSelect.onchange = () => loadPainters();
//        console.log("categoriesSelect onchange called");

        //load painters from the JSON file
        var loader = new PainterLoader('/JSON/famousPainters.json');
        loader.load();
//        console.log("categoriesSelect loaded: " + categoriesSelect.value);
        

    } catch (e) {
        console.log("Error in onload");
        console.log(e.message);
    }

};

/**
 * Updates the page data when a new painter is selected from the drop-down.
*/
function loadPainters() {
    var el = (<HTMLSelectElement> document.getElementById('PainterSelect'));
    try {
        var category = famousPainters.items
            //Find selected item by name
            .filter(item => item.name === el.value)
            //turn the item intp a FamousPainter object
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
  




