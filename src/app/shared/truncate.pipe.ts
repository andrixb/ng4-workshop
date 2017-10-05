import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'limitChar',
})
export class TruncatePipe implements PipeTransform {
    transform(input: string, limit: number): string {
       if (input) {
           return (input.length > length) ? input.substr(0, limit) + '...' : input;
       }
    }
}
