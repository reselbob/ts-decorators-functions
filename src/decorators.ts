import {Gender} from './enums'

export function scream(prefix: string): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            return `${prefix} ${result.toUpperCase()}`;
        };
    };
}

export const asDays = (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result * 365;
    };
}

export const asAbbreviation = (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        switch (result) {
            case Gender.MALE:
                return 'M';
            case Gender.FEMALE:
                return 'F';
            case Gender.NON_BINARY:
                return 'N';
        }
    };
}

/*
export const log = (): Function => {
    return function (target: Function, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`Calling ${propertyKey}`);
            const result = originalMethod.apply(this, args);
            console.log(`${propertyKey} returned: ${JSON.stringify(result)}`);
            return result;
        };
    };
};
*/

export const log = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey}`);
        const result = originalMethod.apply(this, args);
        console.log(`${propertyKey} returned: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
};

