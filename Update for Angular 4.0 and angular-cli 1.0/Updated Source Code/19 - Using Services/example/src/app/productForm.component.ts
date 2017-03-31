import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";
import { Model } from "./repository.model";

@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    //styleUrls: ["app/productForm.component.css"],
    //encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    constructor(private model: Model) { }

    //@Output("paNewProduct")
    //newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            //this.newProductEvent.emit(this.newProduct);
            this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
