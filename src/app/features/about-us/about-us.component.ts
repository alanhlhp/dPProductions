import { Component } from '@angular/core';
import { HeaderThemes } from '../../core/header/header.component';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
    headerTheme = HeaderThemes.INVERSE;

}