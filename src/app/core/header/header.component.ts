import { Component, HostListener, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export enum HeaderThemes {
    NORMAL,
    INVERSE,
}

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    public headerThemes = HeaderThemes;

    @Input()
    theme?: HeaderThemes;

    constructor(private _router: Router) {}

    ngOnInit(): void {
        this.onWindowScroll();
    }

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll() {
        let element = document.querySelector('.navbar') as HTMLElement;
        if (window.pageYOffset > element.clientHeight) {
          element.classList.add('navbar-inverse');
        } else {
          element.classList.remove('navbar-inverse');
        }
    }
}