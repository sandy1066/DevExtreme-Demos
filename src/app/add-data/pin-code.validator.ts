import { AbstractControl } from "@angular/forms";

export function eMailValidator(control: AbstractControl): {[key: string]: any} | null {
    const email: string = control.value;
    const domail = email.substring(email.lastIndexOf('@')+1);

    if(domail.toLowerCase() === 'sandeep.com'){
        return null;
    }
    else{    
        return {'custom': true };
    }
}