class Renderer {

    //Render the options of the PainterSelect HTML select drop-down
    renderCategories(recipeCategoriesSummary: FamousPainters) {
        var recipeSelect = document.getElementById('PainterSelect');
        recipeCategoriesSummary.items.forEach((category) => {
            var opt = document.createElement('option');
            opt.setAttribute('title', category.name);
            opt.innerHTML = category.name;
            recipeSelect.appendChild(opt);
        });
    }
    
    //Render all the painter data: artistic style, birthplace, nationality, birthdate
    //  and examples (by calling renderExamples()).
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

    //Render the artistic examples
    renderExamples(category: FamousPainter) {
        //Update examples
        var examples = document.getElementById('examples');

        var html = '<ol>';
        for (var i = 0, len = category.examples.length; i < len; i++) { 
            var example = category.examples[i];

            html += '<li>' + example + '</li>';
        }

        examples.innerHTML = html + '</ol>';
    }

    renderError() {
        var examples = (<HTMLSelectElement> document.getElementById('examples'));
        examples.value = 'Unable to load data!';
    }
} 