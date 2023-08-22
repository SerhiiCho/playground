"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = /** @class */ (function () {
    function default_1(name) {
        this.name = name;
    }
    Object.defineProperty(default_1.prototype, "getFirst", {
        get: function () {
            var split = this.name.split(' ');
            return split.length > 0 ? split[0] : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "getLast", {
        get: function () {
            var split = this.name.split(' ');
            return split.length >= 2 ? split[1] : '';
        },
        enumerable: false,
        configurable: true
    });
    return default_1;
}());
exports.default = default_1;
