/// <reference path="typings/jquery.d.ts" />

class PainterLoader {
    constructor(public url: string) {}

    load() {
        console.log("PainterLoader.load() called");
        try {
            $.getJSON(this.url,(data) => {
                console.log("$.getJSON() called");
                this.mapData(data);        
            });
        } catch (e) {
            console.log("Problem calling $.getJSON()");
            console.log(e.message);
        }
        console.log("End of PainterLoader.load()");
    }

    mapData(data) {
        if (data) {
            var categories: any[] = data.famousPainters;
            console.log("JSON data: " + categories);
            //TODO
            //Change RecipeCategories to use the new generic type.
            //Pass IRecipeCategory as the type
            famousPainters = new FamousPainters([]);

            //TODO
            //Create a new RecipeCategories object named recipeCategoriesSummary
            //and pass an IRecipeCategorySummary as the generic value.
//            var recipeCategoriesSummary = new RecipeCategories<IRecipeCategorySummary>();

            categories.forEach((category) => {
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
    }


/*    getFoodGroups(category) : FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup) => {
            var group = new FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category) : IExample[] {
        return category.examples.map((example) => { 
            return new Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example): Ingredient[] {
        return example.ingredients.map((value) => {
            return new Ingredient(value);
        });
    }
*/
} 