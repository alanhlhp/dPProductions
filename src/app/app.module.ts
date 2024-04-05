import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { FeaturesModule } from "./features/features.module";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule, RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule, 
        RouterModule,

        AppRoutingModule, 
        CoreModule,
        FeaturesModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}