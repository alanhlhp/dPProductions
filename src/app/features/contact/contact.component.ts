import { Component } from "@angular/core";
import { HeaderThemes } from "../../core/header/header.component";
import { UserService } from "../../services/user.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmailService } from "../../services/email.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    headerTheme = HeaderThemes.INVERSE;

    form: FormGroup = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        subject: new FormControl(),
        message: new FormControl(),
    });

    constructor(private _userService: UserService, private _emailService: EmailService) {}

    public sendEmail() {
        this._userService.getUsers().subscribe((result) => {
            console.log('users: ', result);
        })
        console.log('form: ', this.form);
        this._emailService.sendMesage({
            name: this.form.get('name')?.value,
            email: this.form.get('email')?.value,
            subject: this.form.get('subject')?.value,
            message: this.form.get('message')?.value,
        }).subscribe((response) => {
            console.log('response email: ', response);
        })
    }
}