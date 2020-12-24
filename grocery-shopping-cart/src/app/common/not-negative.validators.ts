import { Directive } from "@angular/core";
import { 
    AbstractControl, 
    NG_VALIDATORS, 
    ValidationErrors,
    Validator, 
    ValidatorFn 
} from "@angular/forms";

export function notNegative() : ValidatorFn{
    return (control: AbstractControl): { [key: string]: any } | null => {
      return  control.value <= 0 ? {notNegative: true} : null;
    } 
}


@Directive({
    selector:'[notNegative][ngModel]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: NotNegativeValidator,
        multi: true
    }]
})

export class NotNegativeValidator implements Validator {
    validate(control: AbstractControl): ValidationErrors {
       return notNegative()(control);
    }
 
  
}


