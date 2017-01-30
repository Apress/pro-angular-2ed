"use strict";
var router_1 = require("@angular/router");
var routes = [
    {
        path: "ondemand",
        loadChildren: "app/ondemand/ondemand.module#OndemandModule"
    },
    { path: "", redirectTo: "/ondemand", pathMatch: "full" }
];
exports.routing = router_1.RouterModule.forRoot(routes);
