import { NgModule } from "@angular/core";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { PageComponent } from "./app-page.component";

@NgModule({
    declarations: [PageComponent],
    imports: [HeaderModule, FooterModule],
    exports: [PageComponent]
})
export class AppPageModule {

}