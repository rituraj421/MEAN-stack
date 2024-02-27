var myParagraph = document.createElement("p");    // Create a <p> element
var myText = document.createTextNode("text added using JS");
// Create a text node that has the text for <p>
myParagraph.appendChild(myText);   // Append the text to <p>
document.body.appendChild(myParagraph); // Append <p> to <body>

var x = true;
var x = "hello";
y = 2;
console.log(typeof x);
console.log(typeof y)
console.log(10 === "10") // it will return false
console.log(10 == "10"); // it will return true

// if else
if (10 === "10") {
    console.log("sahi hai lala")
}
else {
    console.log("galat hai")
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// js object
var car = new Object();
car.model = 'Ford';
console.log(car.model);

var obj = {};
obj.prop1 = "hey this is first property"
obj.prop2 = "hey this is second property"
console.log(obj.prop1 +"\n"+ obj.prop2)

var person = {
    'firstname': 'rituraj',
    'last name ' :'roj',
    crushname : undefined,
    gf : 'null',
    age:23
};

console.log(person.age)
// console.log(crushname)
// console.log(gf)


// arrays
console.log('arrays')

var array = ['hey', 'raju','4']
console.log(array)
console.log(array.pop[0])

// find the max
var numbers = [3,342,23,22,124];
var max = 0;
for(var i=0;i<numbers.length;i++){
  if(numbers[i] > max){
    max = numbers[i];
  }
}
// alert(max);

function removeDuplicates(array) {
    return Array.from(new Set(array));
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5, 6]


// functions
var f = function foo()
{
    console.log("Hello");
};
f(); 

// fib series
function fibonacciSequence(input) {
    //Type your code here.
    let fibSeries = [0,1];
    for(let i = 2; i<=input; i++){
        fibSeries[i] = fibSeries[i-1] + fibSeries[i-2];
    }
    return fibSeries;
}

