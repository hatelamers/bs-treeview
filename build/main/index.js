(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lib/BSTreeView", "./lib/BSTreeViewNode", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/BSTreeViewEventNames", "./lib/themes/BS5Theme", "./lib/themes/FAIconTheme"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FAIconTheme = exports.BS5Theme = exports.EVENT_LOADING = exports.EVENT_LOADING_FAILED = exports.EVENT_INITIALIZED = exports.EVENT_NODE_RENDERED = exports.EVENT_RENDERED = exports.EVENT_DESTROYED = exports.EVENT_NODE_CHECKED = exports.EVENT_NODE_COLLAPSED = exports.EVENT_NODE_DISABLED = exports.EVENT_NODE_ENABLED = exports.EVENT_NODE_EXPANDED = exports.EVENT_NODE_SELECTED = exports.EVENT_NODE_UNCHECKED = exports.EVENT_NODE_UNSELECTED = exports.EVENT_SEARCH_COMPLETED = exports.EVENT_SEARCH_CLEARED = exports.BSTreeViewNode = exports.BSTreeView = void 0;
    var BSTreeView_1 = require("./lib/BSTreeView");
    Object.defineProperty(exports, "BSTreeView", { enumerable: true, get: function () { return BSTreeView_1.default; } });
    var BSTreeViewNode_1 = require("./lib/BSTreeViewNode");
    Object.defineProperty(exports, "BSTreeViewNode", { enumerable: true, get: function () { return BSTreeViewNode_1.default; } });
    var BSTreeViewEventNames_1 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_SEARCH_CLEARED", { enumerable: true, get: function () { return BSTreeViewEventNames_1.EVENT_SEARCH_CLEARED; } });
    var BSTreeViewEventNames_2 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_SEARCH_COMPLETED", { enumerable: true, get: function () { return BSTreeViewEventNames_2.EVENT_SEARCH_COMPLETED; } });
    var BSTreeViewEventNames_3 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_UNSELECTED", { enumerable: true, get: function () { return BSTreeViewEventNames_3.EVENT_NODE_UNSELECTED; } });
    var BSTreeViewEventNames_4 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_UNCHECKED", { enumerable: true, get: function () { return BSTreeViewEventNames_4.EVENT_NODE_UNCHECKED; } });
    var BSTreeViewEventNames_5 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_SELECTED", { enumerable: true, get: function () { return BSTreeViewEventNames_5.EVENT_NODE_SELECTED; } });
    var BSTreeViewEventNames_6 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_EXPANDED", { enumerable: true, get: function () { return BSTreeViewEventNames_6.EVENT_NODE_EXPANDED; } });
    var BSTreeViewEventNames_7 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_ENABLED", { enumerable: true, get: function () { return BSTreeViewEventNames_7.EVENT_NODE_ENABLED; } });
    var BSTreeViewEventNames_8 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_DISABLED", { enumerable: true, get: function () { return BSTreeViewEventNames_8.EVENT_NODE_DISABLED; } });
    var BSTreeViewEventNames_9 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_COLLAPSED", { enumerable: true, get: function () { return BSTreeViewEventNames_9.EVENT_NODE_COLLAPSED; } });
    var BSTreeViewEventNames_10 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_CHECKED", { enumerable: true, get: function () { return BSTreeViewEventNames_10.EVENT_NODE_CHECKED; } });
    var BSTreeViewEventNames_11 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_DESTROYED", { enumerable: true, get: function () { return BSTreeViewEventNames_11.EVENT_DESTROYED; } });
    var BSTreeViewEventNames_12 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_RENDERED", { enumerable: true, get: function () { return BSTreeViewEventNames_12.EVENT_RENDERED; } });
    var BSTreeViewEventNames_13 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_NODE_RENDERED", { enumerable: true, get: function () { return BSTreeViewEventNames_13.EVENT_NODE_RENDERED; } });
    var BSTreeViewEventNames_14 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_INITIALIZED", { enumerable: true, get: function () { return BSTreeViewEventNames_14.EVENT_INITIALIZED; } });
    var BSTreeViewEventNames_15 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_LOADING_FAILED", { enumerable: true, get: function () { return BSTreeViewEventNames_15.EVENT_LOADING_FAILED; } });
    var BSTreeViewEventNames_16 = require("./lib/BSTreeViewEventNames");
    Object.defineProperty(exports, "EVENT_LOADING", { enumerable: true, get: function () { return BSTreeViewEventNames_16.EVENT_LOADING; } });
    var BS5Theme_1 = require("./lib/themes/BS5Theme");
    Object.defineProperty(exports, "BS5Theme", { enumerable: true, get: function () { return BS5Theme_1.default; } });
    var FAIconTheme_1 = require("./lib/themes/FAIconTheme");
    Object.defineProperty(exports, "FAIconTheme", { enumerable: true, get: function () { return FAIconTheme_1.default; } });
});
