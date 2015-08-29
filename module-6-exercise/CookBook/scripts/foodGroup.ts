class FoodGroup {
    name: string;

    constructor(name: string) {
        //TODO
        //Assign the "name" parameter to the 
        //"name" member variable 
        this.name = name;

    }  

    //Added for debugging
    public toString() {
    	return 'FoodGroup(name:' + this.name + ')';
    }
} 