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
     * The global options to configure the treeView
     */
    class BSTreeViewOptions {
        constructor(options = null) {
            this.injectStyle = true;
            /** Sets the number of hierarchical levels deep the tree will be expanded to by default. */
            this.levels = 1;
            /** The data to be displayed on the treeView. Can be either passed as array of nodes / partial node data or a JSON string of the same. Takes presence of ajaxURL */
            this.data = null;
            /** The URL to fetch the data from. fetch() is used to get the data from this url */
            this.ajaxURL = null;
            /** The options to be passed to the fetch() function, when data is fetched from ajaxURL */
            this.ajaxConfig = {
                method: 'GET',
            };
            /** Sets the class name of the icon to be used on an expandable tree node. */
            this.expandIcon = 'glyphicon glyphicon-plus';
            /** Sets the class name of the icon to be used on a collapsible tree node. */
            this.collapseIcon = 'glyphicon glyphicon-minus';
            /** Sets the icon to be used on an a lazyLoad node before its content gets loaded. */
            this.loadingIcon = 'glyphicon glyphicon-hourglass';
            /** Sets the class name of icon to be used on a tree node with no child nodes. */
            this.emptyIcon = 'glyphicon';
            /** Sets the default icon to be used on all nodes, except when overridden on a per node basis in data. */
            this.nodeIcon = '';
            /** Sets the default icon to be used on all selected nodes, except when overridden on a per node basis in data. */
            this.selectedIcon = '';
            /** Sets the class name of the icon to be as a checked checkbox, used in conjunction with showCheckbox. */
            this.checkedIcon = 'glyphicon glyphicon-check';
            /** Sets the class name of icon to be as a partially checked checkbox, used in conjunction with showCheckbox and hierarchicalCheck. */
            this.partiallyCheckedIcon = 'glyphicon glyphicon-expand';
            /** Sets the icon to be as an unchecked checkbox, used in conjunction with showCheckbox. */
            this.uncheckedIcon = 'glyphicon glyphicon-unchecked';
            /** Sets the class of tags to be used on a node. Defaults to 'badge' */
            this.tagsClass = 'badge';
            /** Sets the default foreground color used by all nodes, except when overridden on a per node basis in data. Can be any valid color value */
            this.color = undefined;
            /** Sets the default background color used by all nodes, except when overridden on a per node basis in data. Can be any valid color value */
            this.backColor = undefined;
            /** Sets the border color for the component; set showBorder to false if you don't want a visible border. Can be any valid color value */
            this.borderColor = undefined;
            /** Sets the text color for a node with a changed checkbox. */
            this.changedNodeColor = '#39A5DC';
            /** Sets the default background color activated when the users cursor hovers over a node. */
            this.onhoverColor = '#F5F5F5';
            /** Sets the foreground color of a selected node. Defaults to black */
            this.selectedColor = '#FFFFFF';
            /** Sets the background color of the selected node. */
            this.selectedBackColor = '#428bca';
            /** Sets the foreground color of a node found during a search result */
            this.searchResultColor = '#D9534F';
            /** Sets the background color of a node found during a search result */
            this.searchResultBackColor = undefined;
            /** Whether or not to highlight the selected node. Default true */
            this.highlightSelected = true;
            /** Whether or not to highlight search results. Default false */
            this.highlightSearchResults = true;
            /** Whether or not to display a border around nodes. */
            this.showBorder = true;
            /** Whether or not to display a nodes icon. Default: true */
            this.showIcon = true;
            /** Whether or not to display a nodes image instead of the icon. */
            this.showImage = false;
            /** Whether or not to display checkboxes on nodes. */
            this.showCheckbox = false;
            /** Swaps the node icon with the checkbox, used in conjunction with showCheckbox. Default false */
            this.checkboxFirst = false;
            /** Highlights the nodes with changed checkbox state, used in conjunction with showCheckbox. Default: false */
            this.highlightChanges = false;
            /** Whether or not to display tags to the right of each node. The values of which must be provided in the data structure on a per node basis. Default false */
            this.showTags = false;
            /** Whether or not multiple nodes can be selected at the same time. Default false */
            this.multiSelect = false;
            /** Whether or not a node can be unselected without another node first being selected. Default: false */
            this.preventUnselect = false;
            /** Whether or not a node can be reselected when its already selected, used in conjunction with preventUnselect. Default: false */
            this.allowReselect = false;
            /** Whether or not to enable hierarchical checking/unchecking of checkboxes. Default false */
            this.hierarchicalCheck = false;
            /** Whether or not to propagate nodeChecked and nodeUnchecked events to the parent/child nodes, used in conjunction with hierarchicalCheck. Default false. */
            this.propagateCheckEvent = false;
            /** Whether or not to surround the text of the node with a <span class='text'> tag. */
            this.wrapNodeText = true;
            // Event handlers
            this.onLoading = undefined;
            this.onLoadingFailed = undefined;
            this.onInitialized = undefined;
            this.onNodeRendered = undefined;
            this.onRendered = undefined;
            this.onDestroyed = undefined;
            this.onNodeChecked = undefined;
            this.onNodeCollapsed = undefined;
            this.onNodeDisabled = undefined;
            this.onNodeEnabled = undefined;
            this.onNodeExpanded = undefined;
            this.onNodeSelected = undefined;
            this.onNodeUnchecked = undefined;
            this.onNodeUnselected = undefined;
            this.onSearchComplete = undefined;
            this.onSearchCleared = undefined;
            /** This function is called when a lazily-loadable node is being expanded for the first time.
             *  The node is available as the first argument, while the second argument is a function responsible for passing the loaded data to the renderer.
             *  The data needs to be in the same JSON format as specified above. */
            this.lazyLoad = undefined;
            if (options) {
                Object.assign(this, options);
            }
        }
    }
    exports.default = BSTreeViewOptions;
});
