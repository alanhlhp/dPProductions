import { Component, Input } from "@angular/core";
import { HeaderThemes } from "../header/header.component";

@Component({
    selector: 'app-page',
    templateUrl: './app-page.component.html',
    styleUrl: './app-page.component.scss',
})
export class PageComponent {

    @Input()
    headerTheme?: HeaderThemes;

}