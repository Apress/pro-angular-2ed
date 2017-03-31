import { Component, KeyValueDiffer,
         KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { Model } from "../model/repository.model";

@Component({
    selector: "paCategoryCount",
    template: `<div class="bg-primary p-a-1">There are {{count}} categories</div>`
})
export class CategoryCountComponent {
    private differ: KeyValueDiffer<any, any>;
    count: number = 0;

    constructor(private model: Model,
        private keyValueDiffers: KeyValueDiffers,
        private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {
        this.differ = this.keyValueDiffers
            .find(this.model.getProducts())
            .create(this.changeDetector);
    }

    ngDoCheck() {
        if (this.differ.diff(this.model.getProducts()) != null) {
            this.count = this.model.getProducts()
                .map(p => p.category)
                .filter((category, index, array) => array.indexOf(category) == index)
                .length;
        }
    }
}
