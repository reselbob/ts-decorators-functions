import {Person} from './person'
import {Gender} from './enums'
const person = new Person('Bob', 'Reselman', 69, Gender.MALE);

console.log(person.getFullName())

console.log(person.getAge())

console.log(person.getGender())
