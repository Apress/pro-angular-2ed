import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        console.log("getProductCount invoked");
        return this.getProducts().length;
    }


    targetName: string = "Kayak";

    counter: number = 1;

    get nextProduct(): Product {
        return this.model.getProducts().shift();
    }


    getProductPrice(index: number): number {
        return Math.floor(this.getProduct(index).price);
    }
}
