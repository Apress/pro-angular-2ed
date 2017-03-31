import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class MessageService {
    private subject = new Subject<Message>();

    reportMessage(msg: Message) {
        this.subject.next(msg);
    }

    get messages(): Observable<Message> {
        return this.subject;
    }
}
