import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { MessageService } from "./messages/message.service";
import { Message } from "./messages/message.model";

@Injectable()
export class LoadGuard {
    private loaded: boolean = false;

    constructor(private messages: MessageService,
                private router: Router) { }

    canLoad(route: Route): Promise<boolean> | boolean {

        return this.loaded || new Promise<boolean>((resolve, reject) => {
            let responses: [[string, (string) => void]] = [
                ["Yes", () => {
                    this.loaded = true;
                    resolve(true);
                }],
                ["No", () => {
                    this.router.navigateByUrl(this.router.url);
                    resolve(false);
                }]
            ];

            this.messages.reportMessage(
                new Message("Do you want to load the module?",
                    false, responses));
        });
    }
}
