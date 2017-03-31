import { Component } from "@angular/core";

@Component({
    selector: "paNotFound",
    template: `<h3 class="bg-danger p-a-1">Sorry, something went wrong</h3>
               <button class="btn btn-primary" routerLink="/">Start Over</button>`
})
export class NotFoundComponent {}
