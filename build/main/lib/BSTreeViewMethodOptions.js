(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The options for all kinds of functions in the TreeView
     */
    class BSTreeViewMethodOptions {
        constructor(options = null) {
            /** If true no events will be triggered by this action */
            this.silent = false;
            /**
             * Force a change of the node state, even if the value is not changed. Mostly useful for internal usage
             * @private
             * @internal
             */
            this._force = false;
            Object.assign(this, options);
        }
    }
    exports.default = BSTreeViewMethodOptions;
});
