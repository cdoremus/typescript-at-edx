﻿//TODO:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory
//HINT: refer to the work you did on this in Module 6 to get started 
class RecipeCategory  extends BaseRecipeCategory implements IRecipeCategory {
	description: string;
	examples: IExample[];

   constructor(recipeCategory: RecipeCategory) {
        super(recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }

} 