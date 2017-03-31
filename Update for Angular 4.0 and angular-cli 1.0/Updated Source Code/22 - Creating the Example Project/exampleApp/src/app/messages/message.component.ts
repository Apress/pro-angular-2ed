import { Component } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: "paMessages",
    moduleId: module.id,
    templateUrl: "message.component.html",
})
export class MessageComponent {
    lastMessage: Message;

    constructor(messageService: MessageService) {
        messageService.registerMessageHandler(m => this.lastMessage = m);
    }
}
