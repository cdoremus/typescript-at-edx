class Renderer {

    //Example how the RecipeCategories<T> generic is used.
    renderCategories(recipeCategoriesSummary: FamousPainters) {
        var recipeSelect = document.getElementById('PainterSelect');
        recipeCategoriesSummary.items.forEach((category) => {
            var opt = document.createElement('option');
            opt.setAttribute('title', category.name);
            opt.innerHTML = category.name;
            recipeSelect.appendChild(opt);
        });
    }
    
    renderCategory(category: FamousPainter) {
        //Update style
        var artisticStyle = document.getElementById('artisticStyle');
        artisticStyle.innerHTML = category.style;

        //Update birthplace
        var birthplace = document.getElementById('birthplace');
        birthplace.innerHTML = category.birthplace;

        //Update nationality
        var nationality = document.getElementById('nationality');
        nationality.innerHTML = category.nationality;

        //Update birthdate
        var birthdate = document.getElementById('birthdate');
        birthdate.innerHTML = category.birthdate;


        this.renderExamples(category);

    }

    renderExamples(category: FamousPainter) {
        //Update examples
        var examples = document.getElementById('examples');

        var html = '<ol>';
        for (var i = 0, len = category.examples.length; i < len; i++) { 
            var example = category.examples[i];

            html += '<li>' + '<h4>' + example + ' </h4>' + '</li>';
        }

        examples.innerHTML = html + '</ol>';
    }

    renderError() {
        var examples = (<HTMLSelectElement> document.getElementById('examples'));
        examples.value = 'Unable to load data!';
    }
} 