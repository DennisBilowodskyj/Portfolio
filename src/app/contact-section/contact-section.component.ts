import { Component, ViewChild, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar } from '@angular/material/snack-bar';
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

  @NgModule({
    providers: [
      {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}}
    ]
  })

  async sendMail() {
   

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
        });
        this.myForm?.resetForm();
      } else {
        this.isError = true;
        this._snackBar.open('Failed to send email', '', {
        });
      }
    } catch (error) {
      this.isError = true;
      this._snackBar.open('An error occurred', '', {
      });
    } finally {
      setTimeout(() => {
        this.isSending = false;
        this.emailSent = false;
        this.isError = false;
      }, );
    }
  }

  openPrivacyPolicy() {
    this.showPrivacyP = true;
  }

}
