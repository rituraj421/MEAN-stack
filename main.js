var animal = /** @class */ (function () {
    function animal(theName) {
        this.name = theName;
    }
    animal.prototype.walk = function (distance) {
        console.log("hii my name is" + this.name + " and i'm walking " + distance + "meter");
    };
    return animal;
}());
var myAnimal = new animal("rituraj");
myAnimal.walk(10);
