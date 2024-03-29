(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./BSTreeViewMethodOptions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const BSTreeViewMethodOptions_1 = require("./BSTreeViewMethodOptions");
    /**
     * The options for TreeView selection state functions
     */
    class BSTreeViewSelectOptions extends BSTreeViewMethodOptions_1.default {
    }
    exports.default = BSTreeViewSelectOptions;
});
