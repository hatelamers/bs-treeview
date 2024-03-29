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
     * This class describes the state of a node in the tree (e.g. if it is disabled, expanded, checked, etc.)
     */
    class BSTreeViewNodeState {
        constructor() {
            /** Whether a node is checked, normally represented by a checkbox icon. */
            this.checked = false;
            /** Whether a node is disabled (not selectable, expandable or checkable). */
            this.disabled = false;
            /** Whether or not a node is expanded i.e. open. */
            this.expanded = null;
            /** Whether or not a node is selected. */
            this.selected = false;
        }
    }
    exports.default = BSTreeViewNodeState;
});
