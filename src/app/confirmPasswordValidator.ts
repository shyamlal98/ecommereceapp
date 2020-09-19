import { AbstractControl, FormControl } from '@angular/forms';

export function confirmPasswordValidator (password, confirmPassword)
{
    return (control: FormControl)=>{
        if(!control)
        {
            return null;
        }
        console.log(control.get(password).value==control.get(confirmPassword).value ? null : {confirmPasswordValidator:true});
        return control.get(password).value==control.get(confirmPassword).value ? null : {confirmPasswordValidator:true};
    }
}