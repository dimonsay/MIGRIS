import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild('form') form!: NgForm;
  showSuccess: boolean = false;

  constructor(private userService: UserService) { }

  migris: string = '';
  name: string = '';
  surname: string = '';
  date: string = '';
  passport: string = '';
  expireDate: string = '';
  phoneCode: string = '';
  phoneNumber: string = '';
  email: string = '';
  password: string = '';

  createUser(form: NgForm) {
    const data = {
      migris: this.migris,
      name: this.name.toUpperCase(),
      surname: this.surname.toUpperCase(),
      birth_date: this.date,
      passport: this.passport,
      expired_date: this.expireDate,
      phone_code: this.phoneCode,
      phone_number: this.phoneNumber,
      email: this.email,
      password: this.password
    }


    this.userService.createUser(data).subscribe(
      response => {
        this.showSuccess = true;
        setTimeout(() => {
          form.reset()
          this.showSuccess = false;
        }, 3000);
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  }
}
