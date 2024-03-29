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
     * The options for TreeView search() function
     */
    class BSTreeSearchOptions extends BSTreeViewMethodOptions_1.default {
        constructor() {
            super(...arguments);
            /** Should the search be case sensitive? */
            this.ignoreCase = true;
            /** Should the search only find exact matching nodes, or similar ones too? */
            this.exactMatch = false;
            /** Should the matching nodes be revealed (meaning that their parents will be expanded)? */
            this.revealResults = true;
        }
    }
    exports.default = BSTreeSearchOptions;
});
