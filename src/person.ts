import {scream, asAbbreviation, asDays} from './decorators';
import {Gender} from './enums'
import {Birthdate} from "./birthdate";

export class Person {
    firstName: string;
    lastName: string;
    dob: Birthdate;
    gender: Gender;

    constructor(firstName: string, lastName: string, dob: Birthdate, gender: Gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
    }

    @scream
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getDob(): Birthdate{
        return this.dob;
    }

    @asDays
    getAge(): number {
        return this.calculateAge();
    }

    @asAbbreviation
    getGender(): any{
        return this.gender;
    }

    calculateAge(): number {
        const dob = new Date(`${this.dob.year}-${this.dob.month}-${this.dob.day}`);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
}
