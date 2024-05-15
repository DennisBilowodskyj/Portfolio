import { Component, ViewChild, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar, TextOnlySnackBar } from '@angular/material/snack-bar';
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

  constructor(private _snackBar: MatSnackBar) {}


  async sendMail() {
   
    let contactMail = {
      name: this.myForm?.value.name,
      email: this.myForm?.value.email,
      message: this.myForm?.value.message,
    };
    this.isSending = true;
    let snackBarRef : MatSnackBarRef<SimpleSnackBar> | undefined;

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
        snackBarRef = this._snackBar.open('Email sent successfully', '', {
          duration: 3000
        });
        this.myForm?.resetForm();
      } else {
        this.isError = true;
        snackBarRef = this._snackBar.open('Failed to send email', '', {
          duration: 3000
        });
      }
    } catch (error) {
      this.isError = true;
      snackBarRef = this._snackBar.open('An error occurred', '', {
        duration: 3000
      });
    } finally {
      setTimeout(() => {
        this.isSending = false;
        this.emailSent = false;
        this.isError = false;
        if (snackBarRef){
          snackBarRef.dismiss();
        }
      }, 3000);
    }
  }

  openPrivacyPolicy() {
    this.showPrivacyP = true;
  }


}
