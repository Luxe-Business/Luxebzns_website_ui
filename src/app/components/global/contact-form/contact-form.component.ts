import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  submitAttempts: number = 0;
  maxSubmitAttempts: number = 3;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,private languageService: LanguageService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyWebsite: [''],
      workEmail: ['', [Validators.email,Validators.maxLength(100)]],
      budget: [''],
      country: [''],
      projectDetails: ['', Validators.required],
      marketingConsent: [false]
    });
  }

  onSubmit() {
    this.submitAttempts++;
    if (this.submitAttempts > this.maxSubmitAttempts) {
      const errorMsg = this.languageService.translate.instant('Contact.Toast.Text1');
      const errorMsg2 = this.languageService.translate.instant('Contact.Toast.Text2');
      this.toastr.error(errorMsg, errorMsg2);
      return;
    }
    if (this.contactForm.invalid) {
      const errorMsg = this.languageService.translate.instant('Contact.Toast.Text3');
      const errorMsg2 = this.languageService.translate.instant('Contact.Toast.Text2');
      this.toastr.error(errorMsg, errorMsg2);
      return;
    }

    const formData = {
      ...this.contactForm.value,
      marketingConsent: this.contactForm.value.marketingConsent ? 'Yes' : 'No'
    };

    emailjs.send('service_goml5st', 'template_0dh663v', formData, 'yfpPI9GKajtjxTIcI')
      .then((response: EmailJSResponseStatus) => {

        const errorMsg = this.languageService.translate.instant('Contact.Toast.Text4');
        const errorMsg2 = this.languageService.translate.instant('Contact.Toast.Text5');

        this.toastr.success(errorMsg, errorMsg2);
        this.contactForm.reset();
        this.submitAttempts = 0;
      }, (error) => {
        const errorMsg = this.languageService.translate.instant('Contact.Toast.Text6');
        const errorMsg2 = this.languageService.translate.instant('Contact.Toast.Text2');
        this.toastr.error(errorMsg, errorMsg2);
      });
  }

}
