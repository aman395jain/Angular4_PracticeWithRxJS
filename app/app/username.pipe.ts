import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'userNamePipe'
})
export class UsernamePipe implements PipeTransform {

    transform(items: any[], searchString: string): any[] {
        if (!items) return [];
        if (!searchString) return items;
        searchString = searchString.toLowerCase();
        return items.filter(it => {
            return it.toLowerCase().includes(searchString);
        });
    }
}
