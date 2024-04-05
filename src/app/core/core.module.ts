import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppContainerModule } from "./app-container/app-container.module";
import { AppPageModule } from "./app-page/app-page.module";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";

@NgModule({
    imports: [AppContainerModule, HeaderModule, AppPageModule, FooterModule],
    exports: [AppContainerModule, HeaderModule, AppPageModule, FooterModule],
    
})
export class CoreModule {

}