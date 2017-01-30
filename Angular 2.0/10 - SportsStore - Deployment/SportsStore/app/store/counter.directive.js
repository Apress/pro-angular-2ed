import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";
export var CounterDirective = (function () {
    function CounterDirective(container, template) {
        this.container = container;
        this.template = template;
    }
    CounterDirective.prototype.ngOnChanges = function (changes) {
        this.container.clear();
        for (var i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    };
    CounterDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[counterOf]"
                },] },
    ];
    /** @nocollapse */
    CounterDirective.ctorParameters = [
        { type: ViewContainerRef, },
        { type: TemplateRef, },
    ];
    CounterDirective.propDecorators = {
        'counter': [{ type: Input, args: ["counterOf",] },],
    };
    return CounterDirective;
}());
var CounterDirectiveContext = (function () {
    function CounterDirectiveContext($implicit) {
        this.$implicit = $implicit;
    }
    return CounterDirectiveContext;
}());
