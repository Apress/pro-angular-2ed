import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
export var ProductEditorComponent = (function () {
    function ProductEditorComponent(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.product = new Product();
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params["id"]));
        }
    }
    ProductEditorComponent.prototype.save = function (form) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    };
    ProductEditorComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "productEditor.component.html"
                },] },
    ];
    /** @nocollapse */
    ProductEditorComponent.ctorParameters = [
        { type: ProductRepository, },
        { type: Router, },
        { type: ActivatedRoute, },
    ];
    return ProductEditorComponent;
}());
