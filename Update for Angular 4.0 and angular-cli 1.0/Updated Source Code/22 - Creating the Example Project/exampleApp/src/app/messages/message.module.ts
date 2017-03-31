import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MessageComponent } from "./message.component";
import { MessageService } from "./message.service";

@NgModule({
    imports: [BrowserModule],
    declarations: [MessageComponent],
    exports: [MessageComponent],
    providers: [MessageService]
})
export class MessageModule { }
