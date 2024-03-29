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
    exports.EVENT_NODE_UNSELECTED = exports.EVENT_NODE_UNCHECKED = exports.EVENT_NODE_SELECTED = exports.EVENT_NODE_EXPANDED = exports.EVENT_NODE_ENABLED = exports.EVENT_NODE_DISABLED = exports.EVENT_NODE_COLLAPSED = exports.EVENT_NODE_CHECKED = exports.EVENT_NODE_RENDERED = exports.EVENT_LOADING = exports.EVENT_SEARCH_CLEARED = exports.EVENT_SEARCH_COMPLETED = exports.EVENT_DESTROYED = exports.EVENT_RENDERED = exports.EVENT_INITIALIZED = exports.EVENT_LOADING_FAILED = void 0;
    //Global events
    exports.EVENT_LOADING_FAILED = 'bs-tree:loadingFailed';
    exports.EVENT_INITIALIZED = 'bs-tree:initialized';
    exports.EVENT_RENDERED = 'bs-tree:rendered';
    exports.EVENT_DESTROYED = 'bs-tree:destroyed';
    exports.EVENT_SEARCH_COMPLETED = 'bs-tree:searchCompleted';
    exports.EVENT_SEARCH_CLEARED = 'bs-tree:searchCleared';
    exports.EVENT_LOADING = 'bs-tree:loading';
    //Node events
    exports.EVENT_NODE_RENDERED = 'bs-tree:nodeRendered';
    exports.EVENT_NODE_CHECKED = 'bs-tree:nodeChecked';
    exports.EVENT_NODE_COLLAPSED = 'bs-tree:nodeCollapsed';
    exports.EVENT_NODE_DISABLED = 'bs-tree:nodeDisabled';
    exports.EVENT_NODE_ENABLED = 'bs-tree:nodeEnabled';
    exports.EVENT_NODE_EXPANDED = 'bs-tree:nodeExpanded';
    exports.EVENT_NODE_SELECTED = 'bs-tree:nodeSelected';
    exports.EVENT_NODE_UNCHECKED = 'bs-tree:nodeUnchecked';
    exports.EVENT_NODE_UNSELECTED = 'bs-tree:nodeUnselected';
});
