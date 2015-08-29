/// <reference path="typings/jquery.d.ts" />
var PainterLoader = (function () {
    function PainterLoader(url) {
        this.url = url;
    }
    PainterLoader.prototype.load = function () {
        var _this = this;
        console.log("PainterLoader.load() called");
        try {
            $.getJSON(this.url, function (data) {
                console.log("$.getJSON() called");
                _this.mapData(data);
            });
        }
        catch (e) {
            console.log("Problem calling $.getJSON()");
            console.log(e.message);
        }
        console.log("End of PainterLoader.load()");
    };
    PainterLoader.prototype.mapData = function (data) {
        if (data) {
            //Put the JSON data into an array
            var categories = data.famousPainters;
            console.log("JSON data: " + categories);
            //instantiate the FamousPainters array
            famousPainters = new FamousPainters([]);
            //TODO
            //Create a new RecipeCategories object named recipeCategoriesSummary
            //and pass an IRecipeCategorySummary as the generic value.
            //            var recipeCategoriesSummary = new RecipeCategories<IRecipeCategorySummary>();
            categories.forEach(function (category) {
                var recipeCategory = new FamousPainter({
                    name: category.name,
                    style: category['style'],
                    examples: category.examples,
                    birthplace: category.birthplace,
                    nationality: category.nationality,
                    birthdate: category.birthdate
                });
                //                console.log("Painter: " + recipeCategory);
                famousPainters.items.push(recipeCategory);
                //TODO
                //Create a new RecipeCategorySummary instance and pass
                //the category.title and category.details into the constructor.
                //Once the class is created add it into the recipeCategoriesSummary
                //object's items collection
                //HINT: The constructor object passed must match the IRecipeCategorySummary interface
                //HINT: Use the push() function
                //                var recipeCategorySummary = new RecipeCategorySummary({title: category.title, text: category.details});
                //                recipeCategoriesSummary.items.push(recipeCategorySummary);
            });
            console.log("Famous Painters items array: " + famousPainters.items);
            //Render the categories into the select
            renderer.renderCategories(famousPainters);
        }
        else {
            renderer.renderError();
        }
    };
    return PainterLoader;
})();

//# sourceMappingURL=painterLoader.js.map