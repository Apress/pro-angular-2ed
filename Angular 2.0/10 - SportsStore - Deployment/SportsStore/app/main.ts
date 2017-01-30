///<reference path="../typings/globals/core-js/index.d.ts"/>
///<reference path="../typings/globals/node/index.d.ts"/>

//import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { AppModule } from "./app.module";
import { platformBrowser } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";
import { AppModuleNgFactory } from "../aot/app/app.module.ngfactory";

enableProdMode();

//platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
