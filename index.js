// ---------------------------2nd method----------------------------------------------------------

// Define 10 person objects using the same method as person1
const person1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
const person2 = { firstName: "Jane", lastName: "Smith", age: 35, eyeColor: "green" };
const person3 = { firstName: "Alex", lastName: "Brown", age: 28, eyeColor: "hazel" };
const person4 = { firstName: "Emily", lastName: "Davis", age: 42, eyeColor: "blue" };
const person5 = { firstName: "Chris", lastName: "Taylor", age: 37, eyeColor: "brown" };
const person6 = { firstName: "Olivia", lastName: "Wilson", age: 31, eyeColor: "gray" };
const person7 = { firstName: "James", lastName: "Moore", age: 45, eyeColor: "black" };
const person8 = { firstName: "Sophia", lastName: "Miller", age: 29, eyeColor: "blue" };
const person9 = { firstName: "William", lastName: "Anderson", age: 52, eyeColor: "green" };
const person10 = { firstName: "Mia", lastName: "Thomas", age: 33, eyeColor: "brown" };

// Create an array to store all the person objects
const persons = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10];

// Access the div1 element
const div1 = document.getElementById("div1");

// Loop through each person object and display their details in the div
persons.forEach(person => {
    div1.innerHTML += `${person.firstName} is ${person.age} years old and has ${person.eyeColor} eyes.<br>`;
});