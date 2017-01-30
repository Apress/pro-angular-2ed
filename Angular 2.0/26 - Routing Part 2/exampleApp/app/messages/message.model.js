"use strict";
var Message = (function () {
    function Message(text, error) {
        if (error === void 0) { error = false; }
        this.text = text;
        this.error = error;
    }
    return Message;
}());
exports.Message = Message;
