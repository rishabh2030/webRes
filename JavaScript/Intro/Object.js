// objects
// objects is a type data structer which have method varibles
//  properties + methods = objects
// It is a common practice to declare objects with the const keyword
// lets us create a object of car

// defintion of objet
var car = {
    colour: "red",
    Brand: "BMW",
    Price: 13345,
}

// access the properties or method we use '.' operater
console.log(car.colour);
console.log(car.Price);

// now lets us create an object of student
var student = {
    Name: "Rishabh",
    lastName: "Sharma",
    work: function () {
        return "study and study";
    },
    Roll_no: 4657,
    AllDetails: function () {
        return this.Name + " " + this.lastName;
    }
}

// update
student.Name = "RISHABH";
student.lastName = "SHARMA";
student.Roll_no = "41"
console.log(student.Roll_no);

// create new properties and method

student.Subject = ["c++",'java'];

// delete

delete student.work;

// calling the object
console.log(student.Name);
console.log(student.lastName);
// console.log(student.work());
console.log(student.AllDetails());
console.log(student.Subject);

// special loop to acces all properties
console.log("--------------------+-+++--++")
for(let key in student)
{
    console.log(key,'->',student[key]);
}