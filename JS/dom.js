function changeStyle() {
    var text = document.getElementById("para1").style.color = "red";
}

// var parent = document.getElementById("text");
// var child = document.getElementById("p1");

//     parent.removeChild(child);

var[one,two,three] = ["ritu", "raj", 'roj'];

console.log(one);

var {firstName:first,lastName:last,...details}={
    firstName:  "Neha",
    lastName:   "Singh",
    age:     40,
    city:   "chennai",
    phone:   980000000
}

console.log (first , details);

// arrow functions
let add = (a,b) =>{
    return a+b;
}
console.log(add(2,3))


let person ={
    name:'ritu',
    sayname:function(){
        console.log(`hey it's me ${this.name}`)
    }

}
person.sayname();

// 
const greet = (name = 'player') =>{
    return `Hello ${name}`;
}
console.log(greet())


// literal
let fn = 'rituraj'
let mn = 'bajranglal'
let ln = 'roj'
console.log(`My name is ${fn} ${mn} ${ln}`)

// alternate method
let pr = {
    fn: `rituraj`,
    mn:`bajranglal`,
    name: function(){
        return `My name is ${fn} ${mn}`
    }
}
console.log(pr.name());

// class in js
console.log('class in js')
class arithmatic{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    multiply(){
        return this.a*this.b;
    }
}
let operation = new arithmatic(2,3);
console.log(operation.multiply())


/* Create a class Car with a constructor function that accepts 2 parameters (name and distance).
   Include a prototype method "travelMessage" in a class, which returns a message  "<car_name> had travelled for <distance> miles".
*/

class car{
    constructor(name, distance){
        this.name = name;
        this.distance = distance;
    }
    travel(){
        return `This car ${this.name} has traveled ${this.distance} in a single day`
    }
}

let lemon = new car('rr', '420km')
console.log(lemon.travel())


