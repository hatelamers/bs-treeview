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
     * Use this theme to style the treeview in a bootstrap 5 way.
     * It uses the CSS variables by bootstrap 5.
     */
    class BS5ThemeClass {
        getOptions() {
            return {
                tagsClass: 'badge bg-secondary',
                selectedBackColor: 'var(--bs-primary)',
                selectedColor: 'var(--bs-white)',
                onhoverColor: 'var(--bs-light)',
                searchResultBackColor: 'var(--bs-info)',
                searchResultColor: 'var(--bs-white)',
            };
        }
    }
    exports.default = new BS5ThemeClass();
});
