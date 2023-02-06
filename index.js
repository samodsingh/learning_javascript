// Constructor function------
// let student = {
//     firsName : "Samod",
//     lastName : "singh",
//     age : 23,
//     class : 11
// }
// console.log(student);

function Student(first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}
    Student.prototype.nationality = "Indian";           // add proparty in constructor function----------

let student1 = new Student("Samod", "Singh", 23, 11);
                             // proparty add in obejct
// student1.nationality = "Indian";

console.log(student1);