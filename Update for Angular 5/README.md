# Update for Angular 5

The changes in Angular 5 are largely internal, which means that there are few breaking changes to the examples in Pro Angular. For most projects, the move to Angular 5 will be as simple as upgrading the NPM packages and checking that everything works. 

## Using angular-cli

Since the release of Pro Angular, the angular-cli package has become the standard way to create and manage Angular projects. The advantage of using angular-cli is that it simplifies the setup process required for Angular projects, meaning that you don’t have to manually manage a set of NPM packages, configure the TypeScript compiler and set up a development HTTP server. The process for preparing an Angular application for deployment is also much simpler.

The drawback is that you won’t see the low-level detail of how an Angular application works and the way that the different pieces fit together. To strike a balance, this update uses angular-cli to set up projects and for development tooling but doesn’t take advantage of its scaffolding features or its support for integrating other packages into the compiled JavaScript modules that it creates. I hope that this will give readers the advantages of a simplified project setup without losing some of the important knowledge about how Angular applications really work. 

## Using the Revised Chapters

To help you migrate, this update contains complete replacement chapters for the example applications in Part 1 of the book, revised to use both Angular 5 and angular-cli. 

This will give you a step-by-step walkthrough to get used to the angular-cli workflow and to the small changes that Angular 5 requires. You will find complete projects for each of these chapters in this update in case you don’t want to create them yourself. For these chapters, here are the most substantial changes:

1.	Using angular-cli means that you don’t have to configure a module loader, TypeScript compiler, NPM packages or set up a development HTTP server.

2.	The project structure created by angular-cli puts the application functionality into the `<project>/src/app` folder rather than the `<project>/app` folder that I used in the original examples.

3.	You don’t have to include `app` in a component’s templateUrl property because angular-cli uses a different configuration to resolve file paths.


# Changes for Other Chapters 
For the rest of the book, I have included project source code for each chapter. The following is a detailed list of the changes made to get the source code working, most of which reflect differences in the way that the angular-cli tools are set up.

## Common Changes for All Chapters

1. The way that angular-cli resolves the paths to external templates is different from the one I used in the original examples. When following the examples, you may see an error message like this one: 

        Module not found: Error: Can't resolve '.app.template.html'

    To fix this problem, remove the app/ prefix from the templateUrl property of the component specified in the error. 

2. The `Http` class has been deprecated and replaced with the new `HttpClient` class. The existing code from the examples will continue to work but the `Http` class will be removed in a future release.

## Changes for Chapter 11

Chapter 11 is now redundant since the process for creating a new Angular project is best achieved using angular-cli, which is demonstrated in the replacements for Chapters 2 and 7 in this update. This update also includes an Angular 5 version of the project created in Chapter 11, which is used in later chapters. 

## Changes for Chapter 13
Angular has deprecated the `template` element and replaced it with `ng-template`. All other template features remain unchanged. 

The `ngOutletContext` directive has been deprecated and replaced with `ngTemplateOutletContext`, which serves the same purpose. Use the following code for Listing 13-14 as an example of providing context to a template:

    <ng-template #titleTemplate let-text="title">
        <h4 class="p-a-1 bg-success">{{text}}</h4>
    </ng-template>

    <ng-template [ngTemplateOutlet]="titleTemplate" 
            [ngTemplateOutletContext]="{title: 'Header'}">
    </ng-template>

    <div class="bg-info p-a-1 m-a-1">
        There are {{getProductCount()}} products.
    </div>

    <ng-template [ngTemplateOutlet]="titleTemplate" 
            [ngTemplateOutletContext]="{title: 'Footer'}">
    </ng-template>


## Changes for Chapter 14
Projects created by `@angular-cli` include the `@angular/forms` module, which does not have to be manually added to the `package.json` file.


## Changes for Chapter 16 
Angular has deprecated the `template` element and replaced it with `ng-template`. Replace `<template>` with `<ng-template>` in the HTML listings, such as in this replacement for Listing 16-2:

    <div class="checkbox">
        <label>
            <input type="checkbox" [(ngModel)]="showTable" />
            Show Table
        </label>
    </div>

    <ng-template [paIf]="showTable">
        <table class="table table-sm table-bordered table-striped">
            <tr><th></th><th>Name</th><th>Category</th><th>Price</th></tr>
            <tr *ngFor="let item of getProducts(); let i = index"
                [pa-attr]="getProducts().length < 6 ? 'bg-success' : 'bg-warning'"
                [pa-product]="item" (pa-category)="newProduct.category=$event">
                <td>{{i + 1}}</td>
                <td>{{item.name}}</td>
                <td [pa-attr]="item.category == 'Soccer' ? 'bg-info' : null">
                    {{item.category}}
                </td>
                <td [pa-attr]="'bg-info'">{{item.price}}</td>
            </tr>
        </table>
    </ng-template>

The API that I used to demonstrate change tracking has changed, which is entirely reasonable since this is an internal feature. The changes require type parameters to be specified for the `DefaultIterableDiffer` class and require the create method to be called without parameters, as shown in this replacement Listing 16-16:

    import { Directive, ViewContainerRef, TemplateRef,
                Input, SimpleChange, IterableDiffer, IterableDiffers,
                ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer
    } from "@angular/core";

    @Directive({
        selector: "[paForOf]"
    })
    export class PaIteratorDirective {
        private differ: DefaultIterableDiffer<any>;

        constructor(private container: ViewContainerRef,
            private template: TemplateRef<Object>,
            private differs: IterableDiffers,
            private changeDetector: ChangeDetectorRef) {
        }

        @Input("paForOf")
        dataSource: any;

        ngOnInit() {
            this.differ = 
            <DefaultIterableDiffer<any>> this.differs.find(this.dataSource).create();
        }

        ngDoCheck() {
            let changes = this.differ.diff(this.dataSource);
            if (changes != null) {
                console.log("ngDoCheck called, changes detected");
                changes.forEachAddedItem(addition => {
                    this.container.createEmbeddedView(this.template,
                        new PaIteratorContext(addition.item,
                            addition.currentIndex, changes.length));
                });
            }
        }
    }

    class PaIteratorContext {
        odd: boolean; even: boolean;
        first: boolean; last: boolean;

        constructor(public $implicit: any,
                public index: number, total: number ) {

            this.odd = index % 2 == 1;
            this.even = !this.odd;
            this.first = index == 0;
            this.last = index == total - 1;
        }
    }
The same changes must also be reflected in Listing 16-19, for which you should use this replacement code:

    import {
        Directive, ViewContainerRef, TemplateRef,
        Input, SimpleChange, IterableDiffer, IterableDiffers,
        ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, ViewRef 
    } from "@angular/core";

    @Directive({
        selector: "[paForOf]"
    })
    export class PaIteratorDirective {
        private differ: DefaultIterableDiffer<any>;
        private views: Map<any, PaIteratorContext> = new Map<any, PaIteratorContext>();

        constructor(private container: ViewContainerRef,
            private template: TemplateRef<Object>,
            private differs: IterableDiffers,
            private changeDetector: ChangeDetectorRef) {
        }

        @Input("paForOf")
        dataSource: any;

        ngOnInit() {
            this.differ =
                <DefaultIterableDiffer<any>>this.differs.find(this.dataSource).create();
        }

        ngDoCheck() {
            let changes = this.differ.diff(this.dataSource);
            if (changes != null) {
                changes.forEachAddedItem(addition => {
                    let context = new PaIteratorContext(addition.item,
                        addition.currentIndex, changes.length);
                    context.view = this.container.createEmbeddedView(this.template,
                        context);
                    this.views.set(addition.trackById, context);
                });
                let removals = false;
                changes.forEachRemovedItem(removal => {
                    removals = true;
                    let context = this.views.get(removal.trackById);
                    if (context != null) {
                        this.container.remove(this.container.indexOf(context.view));
                        this.views.delete(removal.trackById);
                    }
                });
                if (removals) {
                    let index = 0;
                    this.views.forEach(context =>
                        context.setData(index++, this.views.size));
                }
            }
        }
    }

    class PaIteratorContext {
        index: number;
        odd: boolean; even: boolean;
        first: boolean; last: boolean;
        view: ViewRef;

        constructor(public $implicit: any,
                public position: number, total: number ) {
            this.setData(position, total);
        }

        setData(index: number, total: number) {
            this.index = index;
            this.odd = index % 2 == 1;
            this.even = !this.odd;
            this.first = index == 0;
            this.last = index == total - 1;
        }
    }

## Changes for Chapter 18
Angular 5 has new implementations of the localized pipes, which are more robust and don’t require a polyfill library. All of the examples in this chapter work but you will see warnings in the JavaScript console about changes to some of the formatting arguments. 

Only the `en-US` locale is available by default and other locales must be explicitly imported and registered for use. Use the following code as a replacement for Listing 18-18 to import and register the `fr-FR` locale.

    import { NgModule } from "@angular/core";
    import { BrowserModule } from "@angular/platform-browser";
    import { ProductComponent } from "./component";
    import { FormsModule, ReactiveFormsModule } from "@angular/forms";
    import { PaAttrDirective } from "./attr.directive";
    import { PaModel } from "./twoway.directive";
    import { PaStructureDirective } from "./structure.directive";
    import { PaIteratorDirective } from "./iterator.directive";
    import { PaCellColor } from "./cellColor.directive";
    import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
    import { ProductTableComponent } from "./productTable.component";
    import { ProductFormComponent } from "./productForm.component";
    import { PaToggleView } from "./toggleView.component";
    import { PaAddTaxPipe } from "./addTax.pipe";
    import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
    import { LOCALE_ID } from "@angular/core";

    import { registerLocaleData } from '@angular/common';
    import localeFr from '@angular/common/locales/fr';

    registerLocaleData(localeFr);

    @NgModule({
        imports: [BrowserModule, FormsModule, ReactiveFormsModule],
        declarations: [ProductComponent, PaAttrDirective, PaModel,
            PaStructureDirective, PaIteratorDirective,
            PaCellColor, PaCellColorSwitcher, ProductTableComponent,
            ProductFormComponent, PaToggleView, PaAddTaxPipe,
            PaCategoryFilterPipe],
        providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
        bootstrap: [ProductComponent]
    })
    export class AppModule { }

## Changes for Chapter 19
This chapter is affected by the same changes as Chapter 16. Use this replacement code for Listing 19-18.

    import { Directive, HostBinding, Input,
        SimpleChange, KeyValueDiffer, KeyValueDiffers,
        ChangeDetectorRef } from "@angular/core";
    import { DiscountService } from "./discount.service";

    @Directive({
        selector: "td[pa-price]",
        exportAs: "discount"
    })
    export class PaDiscountAmountDirective {
        private differ: KeyValueDiffer<any, any>;

        constructor(private keyValueDiffers: KeyValueDiffers,
            private changeDetector: ChangeDetectorRef,
            private discount: DiscountService) { }

        @Input("pa-price")
        originalPrice: number;

        discountAmount: number;

        ngOnInit() {
            this.differ =
                this.keyValueDiffers.find(this.discount).create();
        }

        ngOnChanges(changes: { [property: string]: SimpleChange }) {
            if (changes["originalPrice"] != null) {
                this.updateValue();
            }
        }

        ngDoCheck() {
            if (this.differ.diff(this.discount) != null) {
                this.updateValue();
            }
        }

        private updateValue() {
            this.discountAmount = this.originalPrice
                - this.discount.applyDiscount(this.originalPrice);
        }
    }

## Changes for Chapter 20
The `OpaqueToken` class has been deprecated and `InjectionToken` should be used in its place.


## Changes for Chapter 21	
A change in the way that angular-cli resolves paths means that you should omit the `moduleId` property from the `@Component` decorator.

You can ignore the instructions to delete JavaScript files in this chapter because angular-cli configures the compiler to work in-memory, so that it doesn’t generate any files. 

## Changes for Chapter 24
To ensure that messages are shown correctly, use the following code to replace Listing 24-18:

## Changes for Chapter 25
You can omit the moduleId property from the `@Component` decorator. 

## Changes for Chapter 26 
The change detection API has changed, as shown in this replacement Listing 26-4.

    import { Component, KeyValueDiffer,
            KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
    import { Model } from "../model/repository.model";

    @Component({
        selector: "paProductCount",
        template: `<div class="bg-info p-a-1">There are {{count}} products</div>`
    })
    export class ProductCountComponent {
        private differ: KeyValueDiffer<any, any>;
        count: number = 0;

        constructor(private model: Model,
            private keyValueDiffers: KeyValueDiffers,
            private changeDetector: ChangeDetectorRef) {}

        ngOnInit() {
            this.differ = this.keyValueDiffers
                .find(this.model.getProducts())
                .create();
        }

        ngDoCheck() {
            if (this.differ.diff(this.model.getProducts()) != null) {
                this.updateCount();
            }
        }

        private updateCount() {
            this.count = this.model.getProducts().length;
        }
    }

Use the following code to replace Listing 26-5:

    import {
        Component, KeyValueDiffer,
        KeyValueDiffers, ChangeDetectorRef
    } from "@angular/core";
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
                .create();
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

The way that child routes are defined has changed, which means they can no longer be specified without at least one action property. This replacement Listing 26-17 shows the change that is required to the example application’s routing configuration.

    import { Routes, RouterModule } from "@angular/router";
    import { TableComponent } from "./core/table.component";
    import { FormComponent } from "./core/form.component";
    import { NotFoundComponent } from "./core/notFound.component";
    import { ProductCountComponent } from "./core/productCount.component";
    import { CategoryCountComponent } from "./core/categoryCount.component";


    const routes: Routes = [
        { path: "form/:mode/:id", component: FormComponent },
        { path: "form/:mode", component: FormComponent },
        { path: "does", redirectTo: "/form/create", pathMatch: "prefix" },

        {
            path: "table",
            component: TableComponent,
            children: [
                { path: "products", component: ProductCountComponent },
                { path: "categories", component: CategoryCountComponent }
            ]
        },


        { path: "table/:category", component: TableComponent },
        { path: "table", component: TableComponent },
        { path: "", redirectTo: "/table", pathMatch: "full" },
        { path: "**", component: NotFoundComponent }
    ]

    export const routing = RouterModule.forRoot(routes);

Use the following for Listing 26-21:

    import {
        Component, KeyValueDiffer,
        KeyValueDiffers, ChangeDetectorRef
    } from "@angular/core";
    import { Model } from "../model/repository.model";
    import { ActivatedRoute } from "@angular/router";

    @Component({
        selector: "paProductCount",
        template: `<div class="bg-info p-a-1">There are {{count}} products</div>`
    })
    export class ProductCountComponent {
        private differ: KeyValueDiffer<any, any>;
        count: number = 0;
        private category: string;

        constructor(private model: Model,
                private keyValueDiffers: KeyValueDiffers,
                private changeDetector: ChangeDetectorRef,
                activeRoute: ActivatedRoute) {

            activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
                if (params["category"] != null) {
                    this.category = params["category"];
                    this.updateCount();
                }
            }))
        }

        ngOnInit() {
            this.differ = this.keyValueDiffers
                .find(this.model.getProducts())
                .create();
        }

        ngDoCheck() {
            if (this.differ.diff(this.model.getProducts()) != null) {
                this.updateCount();
            }
        }

        private updateCount() {
            this.count = this.model.getProducts()
                .filter(p => this.category == null || p.category == this.category)
                .length;
        }
    }

## Changes for Chapter 28

The animation functionality has been moved into a separate module. To enable animations, you must import the new module in your root module, like this:

    import { NgModule } from "@angular/core";
    import { BrowserModule } from "@angular/platform-browser";
    import { ModelModule } from "./model/model.module";
    import { CoreModule } from "./core/core.module";
    import { TableComponent } from "./core/table.component";
    import { FormComponent } from "./core/form.component";
    import { MessageModule } from "./messages/message.module";
    import { MessageComponent } from "./messages/message.component";
    import { routing } from "./app.routing";
    import { AppComponent } from "./app.component";
    import { TermsGuard } from "./terms.guard"
    import { LoadGuard } from "./load.guard";
    import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

    @NgModule({
        imports: [BrowserModule, CoreModule, MessageModule, routing, BrowserAnimationsModule],
        declarations: [AppComponent],
        providers: [TermsGuard, LoadGuard],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

## Changes for Chapter 29
When angular-cli creates a project, it adds support for unit testing. To run the tests, just open a new command prompt, navigate to the project folder and run `ng test`.

Remove the `app.component.spec.ts` file - it will generate test errors because it is not configured to work with the example application.

