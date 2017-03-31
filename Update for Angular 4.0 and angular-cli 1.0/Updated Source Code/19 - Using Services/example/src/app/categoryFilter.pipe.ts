import { Pipe } from "@angular/core";
import { Product } from "./product.model";

@Pipe({
    name: "filter",
    pure: false
})
export class PaCategoryFilterPipe {

    transform(products: Product[], category: string): Product[] {
        return category == undefined ?
            products : products.filter(p => p.category == category);
    }
}
