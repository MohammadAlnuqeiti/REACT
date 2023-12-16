// CLASS


// class Car{

//     constructor(model,make,year){
//         this.model=model,
//         this.make=make,
//         this.age=this.carAge(year)
//     }

//     getCarInfo(){
//         return `A ${this.model} made by ${this.make} at ${this.age}`;
//     }
//     carAge(year){
//         return 2023-year;
//     }
// }


// const car1= new Car('Camry','Toyota',2010)

// console.log(car1.getCarInfo())
// console.log(car1.carAge(2005))



// task1

class Car{

    constructor(make,model,min,max,year){
        this.make=make,
        this.model=model,
        this.cost=this.carCost(min,max),
        this.year=year
    }

    getDescription(){
        return `A ${this.model} made by ${this.make} at ${this.year} and price : $${ this.cost} `;
    }
    carCost(min,max){
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    
}
const car1= new Car('Toyota','Camry',10.000,20.000,2022)

console.log(car1.getDescription())

// task2

class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName,
        this.lastName=lastName,
        this.age=age

    }

    getGreeting(){
        return `Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.` 
    }
}

const person1= new Person('mohammad','alnuqeiti',24)
console.log(person1.getGreeting())



//Arrow Function

// task1

function counterFunc(counter) {
    if (counter > 100) {
      counter = 0;
    }else {
        counter++;
    }
    
    return counter;
}

counterFunc2 = counter => { return counter > 100 ? counter = 0 : counter++ }

console.log(counterFunc(200))
console.log(counterFunc2(200))

// task2

function nameAge(name, age) {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }
  
  nameAge2 = (name, age) => {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }
nameAge('mohammad',24)
nameAge2('ahmad',24)

// task3

function createFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

createFullName2 = (firstName, lastName) => {  return firstName + " " + lastName;}

console.log(createFullName('mohammad','ali'))
console.log(createFullName2('ahmed','ahmed'))

// task4

function doubleNumber(number) {
    return number * 2;
}

doubleNumber2 = number => {return number * 2}


console.log(doubleNumber(200))
console.log(doubleNumber2(400))

// task5

function getEvenNumbers(array) {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }

  getEvenNumbers2 = array => {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }


  let array= [200,25,400];
  getEvenNumbers5 = array.filter(ele => ele%2==0)
  
  console.log(getEvenNumbers([200,25,400]))
  console.log(getEvenNumbers2([200,30,400]))
  console.log(getEvenNumbers5)
  
  // task6

//   if (1<2){ 
//     for (let index = 0; index < 5; index++) 
//     {
//      console.log("hi");
//      }
//      } else{ 
//     console.log("hi");
//     }
    
    1<2 ? (()=>{ for (let index = 0; index < 5; index++) { console.log("hi")}})():console.log("no");




//Array Method


// task1

let nums = [2, 4, 5];

const numTotal =nums.reduce((acc,curr)=> acc+curr**2,0)


console.log(numTotal)

// task2

multiply = (list) => {
    const array =list.map(e => e *10) 
    return array;
}

console.log(multiply([1,2,3,4,5,6,7,8]));

// task3
// map

makeStrings=[
    {  name: "Angelina Jolie",
    age: 80   },
    {   name: "Eric Jones",
       age: 2
    },
    {   name: "Paris Hilton",
    age: 5
},
{   name: "Kayne West",
age: 16
},
{   name: "Bob Ziroll",
age: 100
}
];

Matrix = (array)=>{
    const MatrixList=array.map(ele => ele.age>10 ? `${ele.name} can go to The Matrix`:`${ele.name} is under age!!`  )
    
    return MatrixList;
}


console.log(Matrix(makeStrings));

// task4
// reduce

var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

avgAge = (list) =>{
    const array = list.reduce((acc,curr)=> (acc+curr.age),0)/list.length;
    
    return array;
    
}
console.log(avgAge(persons));


// task5
// filter

evenOnly= (list)=>{
    const array=list.filter(ele => ele%2 == 0 )
    return array;
}
console.log(evenOnly([1,8,6,4,5,10]));

// task6
// filter

multiFour = (list)=>{
    const array=list.filter(ele => ele%4 == 0 )
    return array;
}
console.log(multiFour([1,8,6,4]));
