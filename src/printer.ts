import {log} from './decorators'
export class Printer{
    @log
    print(text: string): void {
        console.log(`Printer class is printing: ${text}`);
    }
}
