import { CommonModule, } from '@angular/common';
import { Component, inject, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})

export class ContactSectionComponent {

http = inject(HttpClient);  

name: string = '';
showName: boolean = false;
showText: any;
text: any;
showEmail: boolean = false;
email: string = '';
isChecked:boolean = false;
contactForm: any;
inputValid: boolean = false;

requiredName(){
  if (!this.contactData.name){
    this.showName = true;
  } else {
    this.showName = false;
  }
}
onChangeInput(): void {
  const trimmedName = this.contactData.name.trim();
  this.inputValid = trimmedName.length >= 3;
}
  
  
  

requiredEmail() {
  if (!this.email){
    this.showEmail = true;
  } else {
    this.showEmail = false;
  }
}

requiredTextMessage(){
  if (!this.text){
    this.showText = true;
  } else {
    this.showText = false;
  }
}

toggleCheckbox(event: any) {
  this.isChecked=(event.target.checked);
}




contactData = {
  name: "",
  email: "",
  message: "",
}

mailTest = false;

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
}
