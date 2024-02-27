class animal{
    name:string;

    constructor(theName:string){
        this.name = theName;
    }
    walk(distance:number){
        console.log("hii my name is " + this.name+ " and i'm walking "+distance+"meter")
    }
}

let myAnimal = new animal("rituraj");
myAnimal.walk(10);