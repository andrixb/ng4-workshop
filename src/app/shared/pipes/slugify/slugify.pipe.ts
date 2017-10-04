import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'slugify' })
export class SlugifyPipe implements PipeTransform {

    transform(str: string): string {
        return typeof str === 'string'
            ? str.toLowerCase()
                   .trim()
                   .replace(/[^\w\-]+/g, ' ')
                   .replace(/\s+/g, '-')
            : str;
    }
}
