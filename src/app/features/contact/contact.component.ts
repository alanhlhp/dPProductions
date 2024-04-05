import { Component } from "@angular/core";
import { HeaderThemes } from "../../core/header/header.component";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    headerTheme = HeaderThemes.INVERSE;

}