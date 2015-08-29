var FoodGroup = (function () {
    function FoodGroup(name) {
        //TODO
        //Assign the "name" parameter to the 
        //"name" member variable 
        this.name = name;
    }
    //Added for debugging
    FoodGroup.prototype.toString = function () {
        return 'FoodGroup(name:' + this.name + ')';
    };
    return FoodGroup;
})();

//# sourceMappingURL=foodGroup.js.map