import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'leftPad' })
export class LeftPadPipe implements PipeTransform {

    transform(str: string | number, length: number, padChar: string = ' '): string {
        if (typeof str === 'number') {
            str = str.toString();
        }

        if (typeof str !== 'string' || str.length >= length) {
            return str;
        }

        while (str.length < length) {
            str = padChar + str;
        }

        return str;
    }
}
