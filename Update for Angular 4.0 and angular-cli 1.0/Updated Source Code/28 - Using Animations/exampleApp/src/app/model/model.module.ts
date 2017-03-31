import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http"
import { Model } from "./repository.model";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { ModelResolver } from "./model.resolver";

@NgModule({
    imports: [HttpModule, JsonpModule],
    providers: [Model, RestDataSource, ModelResolver,
        { provide: REST_URL, useValue: "http://localhost:3500/products" }]

})
export class ModelModule { }
