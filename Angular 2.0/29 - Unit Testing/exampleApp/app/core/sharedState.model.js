"use strict";
var core_1 = require("@angular/core");
(function (MODES) {
    MODES[MODES["CREATE"] = 0] = "CREATE";
    MODES[MODES["EDIT"] = 1] = "EDIT";
})(exports.MODES || (exports.MODES = {}));
var MODES = exports.MODES;
var SharedState = (function () {
    function SharedState(mode, id) {
        this.mode = mode;
        this.id = id;
    }
    return SharedState;
}());
exports.SharedState = SharedState;
exports.SHARED_STATE = new core_1.OpaqueToken("shared_state");
