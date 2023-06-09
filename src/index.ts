import {Person} from './person'
import {Gender} from './enums'
import {Birthdate} from "./birthdate";
const dob = new Birthdate(10,1,1,);
const person = new Person('Bob', 'Reselman', dob, Gender.MALE);

console.log(person.getFullName())

console.log(person.getAge())

console.log(person.getGender())
