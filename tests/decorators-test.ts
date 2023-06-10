import {expect} from 'chai';
import {before, describe, it} from 'mocha';
import { faker } from '@faker-js/faker';
import {Person} from '../src/person'
import {Gender} from '../src/enums'
import {get, random} from 'lodash';
import {Birthdate} from "../src/birthdate";


const getRandomNumber = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getDaysInMonth = (month: number): number => {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return isLeapYear() ? 29 : 28;
        default:
            throw new Error(`Invalid month: ${month}`);
    }
}

const isLeapYear = (): boolean => {
    return new Date().getFullYear() % 4 === 0 && (new Date().getFullYear() % 100 !== 0 || new Date().getFullYear() % 400 === 0);
}

const getRandomDob = () => {
    const year = getRandomNumber(1900, 2022);
    const month = getRandomNumber(1, 12);
    const day = getDaysInMonth(month);
    return new Birthdate(year, month,day );
}
describe('Decorator Tests', () => {
    before(async () => {
        // tslint:disable-next-line:no-console
        //console.log(' Starting tests');
    });

    it('Testing Scream', async () => {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const gender = Math.floor(Math.random() * 3) as Gender;
        const dob  = getRandomDob();
        const person  = new Person(fName,lName, dob, gender)
        const result  = person.getFullName()
        expect(result).to.contains(`${fName.toUpperCase()} ${lName.toUpperCase()}`);
    });

    it('Testing Gender', async () => {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const age = Math.floor(Math.random() * 100) + 10;
        const gender = Math.floor(Math.random() * 3) as Gender;
        const dob  = getRandomDob();

        const person  = new Person(fName,lName, dob, gender)
        const result = person.getGender()
        expect(result.length).to.eq(1)
    });

    it('Testing Age', async () => {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const age = Math.floor(Math.random() * 100) + 10;
        const gender = Math.floor(Math.random() * 3) as Gender;
        const dob  = getRandomDob();

        const person  = new Person(fName,lName, dob, gender)
        const result = person.getAge();
        expect(result).to.be.greaterThan(100);
    });

    it('Testing DOB', async () => {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const gender = Math.floor(Math.random() * 3) as Gender;
        const dob  = getRandomDob();

        const person  = new Person(fName,lName, dob, gender)
        const result = person.getDob();
        expect(dob.day).to.eq(result.day);
        expect(dob.month).to.eq(result.month);
        expect(dob.year).to.eq(result.year);
    });
})
