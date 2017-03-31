import { Component, Inject } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { ActivatedRoute } from "@angular/router";
import { HighlightTrigger } from "./table.animations";
import { AnimationTransitionEvent } from "@angular/core";

@Component({
    selector: "paTable",
    moduleId: module.id,
    templateUrl: "table.component.html",
    animations: [HighlightTrigger]
})
export class TableComponent {
    category: string = null;

    constructor(private model: Model, activeRoute: ActivatedRoute) {
        activeRoute.params.subscribe(params => {
            this.category = params["category"] || null;
        })
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts()
            .filter(p => this.category == null || p.category == this.category);
    }

    get categories(): string[] {
        return this.model.getProducts()
            .map(p => p.category)
            .filter((category, index, array) => array.indexOf(category) == index);
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    highlightCategory: string = "";

    getRowState(category: string): string {
        return this.highlightCategory == "" ? "" :
            this.highlightCategory == category ? "selected" : "notselected";
    }

    writeAnimationEvent(event: AnimationTransitionEvent,
        name: string, start: boolean) {
        console.log("Animation " + name + " " + (start ? 'Start' : 'Done')
            + " from: " + event.fromState + " to: " + event.toState + " time: "
            + event.totalTime);
    }
}
