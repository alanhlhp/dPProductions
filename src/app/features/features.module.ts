import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { EmailService } from "../services/email.service";
import { UserService } from "../services/user.service";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";
import { FeaturesRoutingModule } from "./features-routing.module";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
    declarations: [HomeComponent, ContactComponent, PageNotFoundComponent, AboutUsComponent],
    imports: [
        CommonModule,
        RouterModule,
        FeaturesRoutingModule, 
        CoreModule,

        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        UserService,
        EmailService,
    ]
})
export class FeaturesModule {

}