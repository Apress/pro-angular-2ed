"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var model_module_1 = require("../model/model.module");
var table_component_1 = require("./table.component");
var form_component_1 = require("./form.component");
var sharedState_model_1 = require("./sharedState.model");
var Subject_1 = require("rxjs/Subject");
var state_pipe_1 = require("./state.pipe");
var message_module_1 = require("../messages/message.module");
var message_service_1 = require("../messages/message.service");
var message_model_1 = require("../messages/message.model");
var repository_model_1 = require("../model/repository.model");
var sharedState_model_2 = require("./sharedState.model");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, model_module_1.ModelModule, message_module_1.MessageModule],
            declarations: [table_component_1.TableComponent, form_component_1.FormComponent, state_pipe_1.StatePipe],
            exports: [model_module_1.ModelModule, table_component_1.TableComponent, form_component_1.FormComponent],
            providers: [{
                    provide: sharedState_model_1.SHARED_STATE,
                    deps: [message_service_1.MessageService, repository_model_1.Model],
                    useFactory: function (messageService, model) {
                        var subject = new Subject_1.Subject();
                        subject.subscribe(function (m) { return messageService.reportMessage(new message_model_1.Message(sharedState_model_2.MODES[m.mode] + (m.id != undefined
                            ? " " + model.getProduct(m.id).name : ""))); });
                        return subject;
                    }
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
