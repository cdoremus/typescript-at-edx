//entities.ts
var FamousPainter = (function () {
    function FamousPainter(painter) {
        this.name = painter['name'];
        this.style = painter['style'];
        this.examples = painter.examples;
        this.birthplace = painter.birthplace;
        this.nationality = painter.nationality;
        this.birthdate = painter.birthdate;
    }
    FamousPainter.prototype.toString = function () {
        return "FamousPainter { " + "name: " + this.name + ", " + "style:" + this.style + ", " + "birthplace: " + this.birthplace + ", " + "nationality: " + this.nationality + ", " + "birthdate: " + this.birthdate + ", " + "examples: " + this.examples + "}";
    };
    return FamousPainter;
})();
var FamousPainters = (function () {
    function FamousPainters(painters) {
        this.items = painters;
    }
    FamousPainters.prototype.toString = function () {
        var str = "FamousPainters {";
        for (var i = 0; i < items.length; i++) {
            str = str + "[";
            str = str + items[i];
            if (i < items.length) {
                str = str + "]";
            }
        }
        str = str + "}";
        return str;
    };
    return FamousPainters;
})();

//# sourceMappingURL=entities.js.map