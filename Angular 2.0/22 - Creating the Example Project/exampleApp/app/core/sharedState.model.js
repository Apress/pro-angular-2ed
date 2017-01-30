"use strict";
(function (MODES) {
    MODES[MODES["CREATE"] = 0] = "CREATE";
    MODES[MODES["EDIT"] = 1] = "EDIT";
})(exports.MODES || (exports.MODES = {}));
var MODES = exports.MODES;
var SharedState = (function () {
    function SharedState() {
        this.mode = MODES.EDIT;
    }
    return SharedState;
}());
exports.SharedState = SharedState;
