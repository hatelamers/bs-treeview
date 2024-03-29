import BSTreeViewNode from './BSTreeViewNode';
/**
 * The global options to configure the treeView
 */
export default class BSTreeViewOptions {
    injectStyle: boolean;
    /** Sets the number of hierarchical levels deep the tree will be expanded to by default. */
    levels: number;
    /** The data to be displayed on the treeView. Can be either passed as array of nodes / partial node data or a JSON string of the same. Takes presence of ajaxURL */
    data: BSTreeViewNode[] | string;
    /** The URL to fetch the data from. fetch() is used to get the data from this url */
    ajaxURL: string;
    /** The options to be passed to the fetch() function, when data is fetched from ajaxURL */
    ajaxConfig: RequestInit;
    /** Sets the class name of the icon to be used on an expandable tree node. */
    expandIcon: string;
    /** Sets the class name of the icon to be used on a collapsible tree node. */
    collapseIcon: string;
    /** Sets the icon to be used on an a lazyLoad node before its content gets loaded. */
    loadingIcon: string;
    /** Sets the class name of icon to be used on a tree node with no child nodes. */
    emptyIcon: string;
    /** Sets the default icon to be used on all nodes, except when overridden on a per node basis in data. */
    nodeIcon: string;
    /** Sets the default icon to be used on all selected nodes, except when overridden on a per node basis in data. */
    selectedIcon: string;
    /** Sets the class name of the icon to be as a checked checkbox, used in conjunction with showCheckbox. */
    checkedIcon: string;
    /** Sets the class name of icon to be as a partially checked checkbox, used in conjunction with showCheckbox and hierarchicalCheck. */
    partiallyCheckedIcon: string;
    /** Sets the icon to be as an unchecked checkbox, used in conjunction with showCheckbox. */
    uncheckedIcon: string;
    /** Sets the class of tags to be used on a node. Defaults to 'badge' */
    tagsClass: string;
    /** Sets the default foreground color used by all nodes, except when overridden on a per node basis in data. Can be any valid color value */
    color: string;
    /** Sets the default background color used by all nodes, except when overridden on a per node basis in data. Can be any valid color value */
    backColor: string;
    /** Sets the border color for the component; set showBorder to false if you don't want a visible border. Can be any valid color value */
    borderColor: string | boolean;
    /** Sets the text color for a node with a changed checkbox. */
    changedNodeColor: string;
    /** Sets the default background color activated when the users cursor hovers over a node. */
    onhoverColor: string;
    /** Sets the foreground color of a selected node. Defaults to black */
    selectedColor: string;
    /** Sets the background color of the selected node. */
    selectedBackColor: string;
    /** Sets the foreground color of a node found during a search result */
    searchResultColor: string;
    /** Sets the background color of a node found during a search result */
    searchResultBackColor: string;
    /** Whether or not to highlight the selected node. Default true */
    highlightSelected: boolean;
    /** Whether or not to highlight search results. Default false */
    highlightSearchResults: boolean;
    /** Whether or not to display a border around nodes. */
    showBorder: boolean;
    /** Whether or not to display a nodes icon. Default: true */
    showIcon: boolean;
    /** Whether or not to display a nodes image instead of the icon. */
    showImage: boolean;
    /** Whether or not to display checkboxes on nodes. */
    showCheckbox: boolean;
    /** Swaps the node icon with the checkbox, used in conjunction with showCheckbox. Default false */
    checkboxFirst: boolean;
    /** Highlights the nodes with changed checkbox state, used in conjunction with showCheckbox. Default: false */
    highlightChanges: boolean;
    /** Whether or not to display tags to the right of each node. The values of which must be provided in the data structure on a per node basis. Default false */
    showTags: boolean;
    /** Whether or not multiple nodes can be selected at the same time. Default false */
    multiSelect: boolean;
    /** Whether or not a node can be unselected without another node first being selected. Default: false */
    preventUnselect: boolean;
    /** Whether or not a node can be reselected when its already selected, used in conjunction with preventUnselect. Default: false */
    allowReselect: boolean;
    /** Whether or not to enable hierarchical checking/unchecking of checkboxes. Default false */
    hierarchicalCheck: boolean;
    /** Whether or not to propagate nodeChecked and nodeUnchecked events to the parent/child nodes, used in conjunction with hierarchicalCheck. Default false. */
    propagateCheckEvent: boolean;
    /** Whether or not to surround the text of the node with a <span class='text'> tag. */
    wrapNodeText: boolean;
    onLoading: (event: Event) => void;
    onLoadingFailed: (event: Event) => void;
    onInitialized: (event: Event) => void;
    onNodeRendered: (event: Event) => void;
    onRendered: (event: Event) => void;
    onDestroyed: (event: Event) => void;
    onNodeChecked: (event: Event) => void;
    onNodeCollapsed: (event: Event) => void;
    onNodeDisabled: (event: Event) => void;
    onNodeEnabled: (event: Event) => void;
    onNodeExpanded: (event: Event) => void;
    onNodeSelected: (event: Event) => void;
    onNodeUnchecked: (event: Event) => void;
    onNodeUnselected: (event: Event) => void;
    onSearchComplete: (event: Event) => void;
    onSearchCleared: (event: Event) => void;
    /** This function is called when a lazily-loadable node is being expanded for the first time.
     *  The node is available as the first argument, while the second argument is a function responsible for passing the loaded data to the renderer.
     *  The data needs to be in the same JSON format as specified above. */
    lazyLoad: (node: BSTreeViewNode, renderer: (nodes: BSTreeViewNode[]) => void) => void;
    constructor(options?: BSTreeViewOptions | Partial<BSTreeViewOptions>);
}
