import {Printer} from '../src/printer'
describe('Decorator Tests', () => {
    it('Testing Printer', async () => {
        const printer = new Printer();
        printer.print('Decorators are cool!');
    });
})
