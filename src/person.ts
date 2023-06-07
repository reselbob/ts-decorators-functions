import {scream, decimals, asAbbreviation} from './decorators';
import {Gender} from './enums'


export class Person {
    firstName: string;
    lastName: string
    age: number;
    gender: Gender;

    constructor(firstName: string, lastName: string, age: number, gender: Gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    @scream
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    @decimals(3)
    getAge() {
        return this.age;
    }

    @asAbbreviation
    getGender() {
        return this.gender;
    }
}
