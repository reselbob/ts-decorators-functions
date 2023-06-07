import "reflect-metadata";
import {Gender} from './enums'

export const scream = (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };
}

export const decimals = (decimalPlaces: number) => {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            return parseFloat(result).toFixed(decimalPlaces);
        };
    };
}

export const asAbbreviation = (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        switch (result){
            case Gender.MALE:
                return 'M';
            case Gender.FEMALE:
                return 'F';
            case Gender.NON_BINARY:
                return 'N';
        }
    };
}

