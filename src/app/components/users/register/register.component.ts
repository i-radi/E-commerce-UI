import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,19}$/)]),
    rePassword: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,19}$/)]),
    phone: new FormControl(null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, {validators: this.rePasswordMatch});
  isLoading:boolean = false;
  apiError:string = '';

  constructor(private _authService:AuthService, private _router:Router){
    if (localStorage.getItem('token') !== null) {
      this._router.navigate(['/home']);
    }
  }

  rePasswordMatch(registerForm:any){
    let passwordControl = registerForm.get('password');
    let rePasswordControl = registerForm.get('rePassword');
    if(passwordControl?.value === rePasswordControl?.value) return null;
    rePasswordControl?.setErrors({passwordmatch:'invalid'});
    return {passwordmatch:'invalid'};

  }

  handleRegister(registerForm: FormGroup) {
    this.isLoading = true;
    if (registerForm.valid) {
      this._authService.register(registerForm.value).subscribe({
        next:(response) => {
          if(response.message === 'success'){
            this.isLoading = false;
            this._router.navigate(['/login'])
          }
        },
        error:(err) => {
          this.isLoading = false;
          this.apiError = err.error.message;
        }
      })
    }
  }
}
