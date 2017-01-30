"use strict";
var router_1 = require("@angular/router");
var table_component_1 = require("./core/table.component");
var form_component_1 = require("./core/form.component");
var notFound_component_1 = require("./core/notFound.component");
var productCount_component_1 = require("./core/productCount.component");
var categoryCount_component_1 = require("./core/categoryCount.component");
var model_resolver_1 = require("./model/model.resolver");
var terms_guard_1 = require("./terms.guard");
var unsaved_guard_1 = require("./core/unsaved.guard");
var load_guard_1 = require("./load.guard");
var childRoutes = [
    {
        path: "",
        canActivateChild: [terms_guard_1.TermsGuard],
        children: [{ path: "products", component: productCount_component_1.ProductCountComponent },
            { path: "categories", component: categoryCount_component_1.CategoryCountComponent },
            { path: "", component: productCount_component_1.ProductCountComponent }],
        resolve: { model: model_resolver_1.ModelResolver }
    }
];
var routes = [
    {
        path: "ondemand",
        loadChildren: "app/ondemand/ondemand.module#OndemandModule",
        canLoad: [load_guard_1.LoadGuard]
    },
    {
        path: "form/:mode/:id", component: form_component_1.FormComponent,
        resolve: { model: model_resolver_1.ModelResolver },
        canDeactivate: [unsaved_guard_1.UnsavedGuard]
    },
    {
        path: "form/:mode", component: form_component_1.FormComponent,
        resolve: { model: model_resolver_1.ModelResolver },
        canActivate: [terms_guard_1.TermsGuard]
    },
    { path: "table", component: table_component_1.TableComponent, children: childRoutes },
    { path: "table/:category", component: table_component_1.TableComponent, children: childRoutes },
    { path: "", redirectTo: "/table", pathMatch: "full" },
    { path: "**", component: notFound_component_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
