import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {

    get showGoUpButton(): boolean {
        return window.scrollY > 0;
    }

    constructor() {}

    scrollToTop(): void {
        console.log('scrollY: ', window.scrollY);
        console.log('screenY: ', window.screenY);
        console.log('pageYOffset: ', window.pageYOffset);
        window.scrollTo(0, 0);
    }
}