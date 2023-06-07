import {expect} from 'chai';
import {before, describe, it} from 'mocha';
import { faker } from '@faker-js/faker';
import {Person} from '../src/person'
import {Gender} from '../src/enums'
import { random } from 'lodash';


const getPerson = () => {

}

describe('Hello World with Joke Activity Tests', () => {
    before(async () => {
        // tslint:disable-next-line:no-console
        console.log(' Starting tests');
    });

    it('Testing Scream', async () => {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const age = Math.floor(Math.random() * 100) + 10;
        const gender = Math.floor(Math.random() * 3) as Gender;


        const person  = new Person(fName,lName, age, gender)

        expect(person.getFullName()).to.eq(`${fName.toUpperCase()} ${lName.toUpperCase()}`)

    });

    it('Testing Gender', async () => {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const age = Math.floor(Math.random() * 100) + 10;
        const gender = Math.floor(Math.random() * 3) as Gender;


        const person  = new Person(fName,lName, age, gender)

        expect(person.getFullName()).to.eq(`${fName.toUpperCase()} ${lName.toUpperCase()}`)

    });
})
