import { Component, ViewChild, NgModule,} from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink,TranslateModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})

export class ContactSectionComponent {
@ViewChild('myForm') myForm?: NgForm;
isSending = false;
emailSent = false;
isError = false;
privacyPolicyChecked: any;
showPrivacyP = false

/*http = inject(HttpClient);*/

async sendMail(){
  let contactMail = new FormData();
  contactMail.append('name', this.myForm?.value.name);
  contactMail.append('email', this.myForm?.value.email);
  contactMail.append('message', this.myForm?.value.message);
  this.isSending = true;
  try {
    await fetch ('https://dennis-bilowodskyj.com/sendMail.php',{
      method: 'POST',
      body: contactMail
    });
    this.emailSent = true;
    this.myForm?.resetForm();
  } catch (error){
    this.isSending = false;
    this.isError = true;
  } finally{
    setTimeout(() =>{
      this.isSending = false;
      this.emailSent = false;
      this.isError = false;
    },3000)
  }
}

openPrivacyPolicy(){
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

