import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountEditor",
    template: `<div class="form-group">
                   <label>Discount</label>
                   <input [(ngModel)]="discounter.discount" 
                        class="form-control" type="number" />              
               </div>`
})
export class PaDiscountEditorComponent {

    constructor(private discounter: DiscountService) { }
}
