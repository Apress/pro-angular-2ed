import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductTableComponent } from "./components/productTable.component";
import { ProductFormComponent } from "./components/productForm.component";
import { ModelModule } from "./model/model.module";
import { CommonModule } from "./common/common.module";
import { ComponentsModule } from "./components/components.module";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,
        ModelModule, CommonModule, ComponentsModule],
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }
