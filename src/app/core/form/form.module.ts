import { NgModule } from "@angular/core";
import { ButtonModule } from "./button/button.module";
import { InputModule } from "./input/input.module";

@NgModule({
    imports: [InputModule, ButtonModule],
    exports: [InputModule, ButtonModule],
})
export class FormModule {}