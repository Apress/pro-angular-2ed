import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Model } from "./repository.model";

@NgModule({
    providers: [Model, StaticDataSource]
})
export class ModelModule { }
