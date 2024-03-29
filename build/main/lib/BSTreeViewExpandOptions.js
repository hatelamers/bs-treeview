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
     * The options for TreeView collapse/expand functions
     */
    class BSTreeViewExpandOptions extends BSTreeViewMethodOptions_1.default {
        constructor() {
            super(...arguments);
            /**
             * The number of levels that should be expanded when expanding a node.
             */
            this.levels = 999;
        }
    }
    exports.default = BSTreeViewExpandOptions;
});
