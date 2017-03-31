import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "paMessages",
    moduleId: module.id,
    templateUrl: "message.component.html",
})
export class MessageComponent {
    lastMessage: Message;

    constructor(messageService: MessageService) {
        messageService.messages.subscribe(m => this.lastMessage = m);
    }
}
