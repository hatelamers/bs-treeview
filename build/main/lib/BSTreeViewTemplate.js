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
    function templateElement(tagType, classes, role = null) {
        const el = document.createElement(tagType);
        if (classes.length > 0) {
            el.classList.add(...classes.split(' '));
        }
        if (role) {
            el.setAttribute('role', role);
        }
        return el;
    }
    /**
     * This class gives template elements for the tree view.
     * @internal
     * @private
     */
    class BSTreeViewTemplate {
        constructor() {
            this.tree = templateElement('ul', 'list-group', 'tree');
            this.node = templateElement('li', 'list-group-item', 'treeitem');
            this.indent = templateElement('span', 'indent', 'none');
            this.icon = {
                node: templateElement('span', 'icon node-icon'),
                expand: templateElement('span', 'icon expand-icon', 'group'),
                check: templateElement('span', 'icon check-icon'),
                empty: templateElement('span', 'icon', 'none'),
            };
            this.image = templateElement('span', 'image');
            this.badge = templateElement('span', '');
            this.text = templateElement('span', 'text');
        }
    }
    exports.default = new BSTreeViewTemplate();
});
