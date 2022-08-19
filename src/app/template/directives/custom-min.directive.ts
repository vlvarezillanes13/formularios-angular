import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, FormControl, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector:'[customMin][ngModel]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi:true
    }]
})
export class CustomMinDirective implements Validator{

    //minimo del input(padre)
    @Input() minimo!:number;

    constructor() {
        //console.log('directiva',this.minimo);
    }

    validate(control: FormControl): ValidationErrors | null {
    
        const inputValue = control.value;

        return ( inputValue < this.minimo)
                ? { 'customMin':true}
                : null;
    }

    

}