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
var PaIteratorDirective = (function () {
    function PaIteratorDirective(container, template, differs, changeDetector) {
        this.container = container;
        this.template = template;
        this.differs = differs;
        this.changeDetector = changeDetector;
        this.views = new Map();
    }
    PaIteratorDirective.prototype.ngOnInit = function () {
        this.differ = this.differs.find(this.dataSource).create(this.changeDetector);
    };
    PaIteratorDirective.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.dataSource);
        if (changes != null) {
            changes.forEachAddedItem(function (addition) {
                var context = new PaIteratorContext(addition.item, addition.currentIndex, changes.length);
                context.view = _this.container.createEmbeddedView(_this.template, context);
                _this.views.set(addition.trackById, context);
            });
            var removals_1 = false;
            changes.forEachRemovedItem(function (removal) {
                removals_1 = true;
                var context = _this.views.get(removal.trackById);
                if (context != null) {
                    _this.container.remove(_this.container.indexOf(context.view));
                    _this.views.delete(removal.trackById);
                }
            });
            if (removals_1) {
                var index_1 = 0;
                this.views.forEach(function (context) {
                    return context.setData(index_1++, _this.views.size);
                });
            }
        }
    };
    __decorate([
        core_1.Input("paForOf"), 
        __metadata('design:type', Object)
    ], PaIteratorDirective.prototype, "dataSource", void 0);
    PaIteratorDirective = __decorate([
        core_1.Directive({
            selector: "[paForOf]"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef, core_1.IterableDiffers, core_1.ChangeDetectorRef])
    ], PaIteratorDirective);
    return PaIteratorDirective;
}());
exports.PaIteratorDirective = PaIteratorDirective;
var PaIteratorContext = (function () {
    function PaIteratorContext($implicit, position, total) {
        this.$implicit = $implicit;
        this.position = position;
        this.setData(position, total);
    }
    PaIteratorContext.prototype.setData = function (index, total) {
        this.index = index;
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;
    };
    return PaIteratorContext;
}());
