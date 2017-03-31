import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";
import { FormComponent } from "./form.component";

@Injectable()
export class UnsavedGuard {

    constructor(private messages: MessageService,
                private router: Router) { }

    canDeactivate(component: FormComponent, route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (component.editing) {
            if (["name", "category", "price"]
                .some(prop => component.product[prop]
                    != component.originalProduct[prop])) {
                let subject = new Subject<boolean>();

                let responses: [[string, (string) => void]] = [
                    ["Yes", () => {
                        subject.next(true);
                        subject.complete();
                    }],
                    ["No", () => {
                        this.router.navigateByUrl(this.router.url);
                        subject.next(false);
                        subject.complete();
                    }]
                ];
                this.messages.reportMessage(new Message("Discard Changes?",
                    true, responses));
                return subject;
            }
        }
        return true;
    }
}
