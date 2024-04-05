import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { HeaderModule } from "../header/header.module";
import { AppContainerComponent } from "./app-container.component";

@NgModule({
    declarations: [AppContainerComponent],
    imports: [CommonModule, HeaderModule, RouterModule, RouterOutlet],
    exports: [AppContainerComponent]
})
export class AppContainerModule {

}