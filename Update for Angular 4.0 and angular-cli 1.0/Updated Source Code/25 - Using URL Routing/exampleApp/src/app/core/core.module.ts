import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
//import { SharedState, SHARED_STATE } from "./sharedState.model";
import { Subject } from "rxjs/Subject";
import { StatePipe } from "./state.pipe";
import { MessageModule } from "../messages/message.module";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";
import { Model } from "../model/repository.model";
//import { MODES } from "./sharedState.model";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule],
    declarations: [TableComponent, FormComponent, StatePipe],
    exports: [ModelModule, TableComponent, FormComponent],
    //providers: [{
    //    provide: SHARED_STATE,
    //    deps: [MessageService, Model],
    //    useFactory: (messageService, model) => {
    //        return new Subject<SharedState>();
    //    }
    //}]
})
export class CoreModule { }
