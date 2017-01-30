"use strict";
var router_1 = require("@angular/router");
var table_component_1 = require("./core/table.component");
var form_component_1 = require("./core/form.component");
var notFound_component_1 = require("./core/notFound.component");
var terms_guard_1 = require("./terms.guard");
var unsaved_guard_1 = require("./core/unsaved.guard");
var routes = [
    {
        path: "form/:mode/:id", component: form_component_1.FormComponent,
        canDeactivate: [unsaved_guard_1.UnsavedGuard]
    },
    { path: "form/:mode", component: form_component_1.FormComponent, canActivate: [terms_guard_1.TermsGuard] },
    { path: "table", component: table_component_1.TableComponent },
    { path: "table/:category", component: table_component_1.TableComponent },
    { path: "", redirectTo: "/table", pathMatch: "full" },
    { path: "**", component: notFound_component_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
