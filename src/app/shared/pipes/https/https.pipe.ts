import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'https'})
export class HttpsPipe implements PipeTransform {

    transform(str: string): string {
        return str.replace(/^http:/, 'https:');
    }
}
