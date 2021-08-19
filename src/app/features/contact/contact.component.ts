import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {ContactService} from "@core/services/contact.service";
import {takeUntil} from "rxjs/operators";
import {ReCaptchaV3Service} from "ng-recaptcha";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  contactForm: FormGroup;
  isSubmitting = false;
  sentMessage = false;
  private onDestroyNotifier = new Subject();

  constructor(private contactService: ContactService,
              private recaptchaService: ReCaptchaV3Service) {
    this.contactForm = this.getInitialForm();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.onDestroyNotifier.next();
    this.onDestroyNotifier.complete();
  }

  getInitialForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      terms: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  sendMessage() {
    if (!this.isSubmitting && this.isValidForm()) {
      this.sentMessage = false;
      this.isSubmitting = true;
      this.recaptchaService.execute('submit')
        .pipe(takeUntil(this.onDestroyNotifier))
        .subscribe(
          (token) => {
            this.contactService.sendMessage(
              token,
              this.contactForm.get('name')!!.value,
              this.contactForm.get('email')!!.value,
              this.contactForm.get('message')!!.value
            ).pipe(
              takeUntil(this.onDestroyNotifier)
            ).subscribe(
              (res: any) => {
                this.contactForm = this.getInitialForm();
                this.sentMessage = true;
                this.isSubmitting = false;
              },
              (err: any) => {
                console.log(err);
                this.isSubmitting = false;
              }
            );
          },
          (err: any) => {
            console.log(err);
            this.isSubmitting = false;
          }
        );
    } else {
      console.log('Not a valid form');
    }
  }

  isValidForm(): boolean {
    return this.contactForm.dirty && this.contactForm.valid && this.contactForm.get('terms')?.value;
  }
}
