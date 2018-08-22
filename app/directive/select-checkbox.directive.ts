import { Directive } from '@angular/core';

@Directive({
  selector: '[selectCheckbox]'  //for attribute directive it would be .selectCheckbox rather then [selectCheckbox]

})
export class SelectCheckboxDirective {

  constructor() { }

}
