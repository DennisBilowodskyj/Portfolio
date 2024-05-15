import { Component, ViewChild, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  @ViewChild('myForm') myForm?: NgForm;
  isSending = false;
  emailSent = false;
  isError = false;
  privacyPolicyChecked: any;
  showPrivacyP = false;
  durationInSeconds: number = 3;

  constructor(private _snackBar: MatSnackBar) {}


  async sendMail() {
    //let contactMail = new FormData();
    //contactMail.append('name', this.myForm?.value.name);
    //contactMail.append('email', this.myForm?.value.email);
    //contactMail.append('message', this.myForm?.value.message);

    let contactMail = {
      name: this.myForm?.value.name,
      email: this.myForm?.value.email,
      message: this.myForm?.value.message,
    };
    this.isSending = true;
    try {
      const response = await fetch(
        'https://dennis-bilowodskyj.com/sendMail.php',
        {
          method: 'POST',
          body: JSON.stringify(contactMail),
        }
      );

      if (response.ok) {
        this.emailSent = true;
        this._snackBar.open('Email sent successfully', '', {
          duration: this.durationInSeconds * 1000,
        });
        this.myForm?.resetForm();
      } else {
        this.isError = true;
        this._snackBar.open('Failed to send email', '', {
          duration: this.durationInSeconds * 1000,
        });
      }
    } catch (error) {
      this.isError = true;
      this._snackBar.open('An error occurred', '', {
        duration: this.durationInSeconds * 1000,
      });
    } finally {
      setTimeout(() => {
        this.isSending = false;
        this.emailSent = false;
        this.isError = false;
      }, 3000);
    }
  }

  openPrivacyPolicy() {
    this.showPrivacyP = true;
  }


  /*mailTest = false;

  post = {
    endPoint: 'https://dennis-bilowodskyj.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

 

onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {

          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    ngForm.resetForm();
  }
 
}
  contactData(contactData: any): any {
    throw new Error('Method not implemented.');
  }
  */
}
