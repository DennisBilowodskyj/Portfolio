import { Component, ViewChild, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
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
    SimpleSnackBar,
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
  snackBarRef?: MatSnackBarRef<any>;

  constructor(private _snackBar: MatSnackBar) {}

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
        this.showSnackBar('Email sent successfully', 'success');
        this.myForm?.resetForm();
      } else {
        this.isError = true;
        this.showSnackBar('Failed to send email', 'error');
      }
    } catch (error) {
      this.isError = true;
      this.showSnackBar('An error occurred', 'error');
    } finally {
      this.resetFlagsAfterTimeout(3000);
    
      setTimeout(() => {
        const snackbarElement = document.querySelector('mat-snack-bar-container.mdc-snackbar--open');
        if (snackbarElement && snackbarElement instanceof HTMLElement) {
          snackbarElement.remove();
        }
      }, 3000); 
    }
  }

  showSnackBar(message: string, type: string) {
    let duration = 3000;
    if (type === 'success') {
      duration = 3000;
    } else if (type === 'error') {
      duration = 5000;
    }

    this.snackBarRef = this._snackBar.open(message, '', {
      duration: duration,
    });
  }

  resetFlagsAfterTimeout(timeout: number) {
    setTimeout(() => {
      this.isSending = false;
      this.emailSent = false;
      this.isError = false;
    }, timeout);
  }

  openPrivacyPolicy() {
    this.showPrivacyP = true;
  }
}
