import BSTreeSearchOptions from './BSTreeSearchOptions';
import BSTreeViewDisableOptions from './BSTreeViewDisableOptions';
import BSTreeViewExpandOptions from './BSTreeViewExpandOptions';
import BSTreeViewMethodOptions from './BSTreeViewMethodOptions';
import { default as BSTreeViewNode } from './BSTreeViewNode';
import BSTreeViewOptions from './BSTreeViewOptions';
import BSTreeViewSelectOptions from './BSTreeViewSelectOptions';
import BSTreeViewTheme from './themes/BSTreeViewTheme';
/**
 * This class allows to create and represent the TreeView element.
 */
export default class BSTreeView {
    /**
     * @private
     * @internal
     */
    _css: string;
    /**
     * @private
     * @internal
     * @param {HTMLElement} The HTMLElement this tree applies to
     */
    _element: HTMLElement;
    /**
     * @private
     * @internal
     * The wrapper in which the tree resides (normally an <ul> element)
     */
    _wrapper: HTMLElement | null;
    /**
     * {string}
     * @private
     * @internal
     */
    _elementId: string;
    /**
     * @private
     * @internal
     */
    _styleId: string;
    /**
     * The hierarchically tree of nodes
     * @private
     * @internal
     */
    _tree: BSTreeViewNode[];
    /**
     * A flat list representation of all nodes (unsorted)
     * @private
     * @internal
     */
    _nodes: Map<string, BSTreeViewNode>;
    /**
     * A flat list representation of all nodes, sorted by their nodeId, which gives you the render order
     * @private
     * @internal
     */
    _orderedNodes: Map<string, BSTreeViewNode>;
    /**
     * @private
     * @internal
     */
    _checkedNodes: BSTreeViewNode[];
    /**
     * Whether this treeview was already initialized
     * @private
     * @internal
     */
    _initialized: boolean;
    /**
     * The options used to initialize this treeView
     * @private
     * @internal
     */
    _options: BSTreeViewOptions;
    /**
     * Create a new treeView inside the given element
     * @param element The elements in which the tree will be rendered
     * @param options The options for the tree, the data is passed here too
     * @param themes Optional themes to apply to the tree
     */
    constructor(element: HTMLElement, options: BSTreeViewOptions | Partial<BSTreeViewOptions>, themes?: BSTreeViewTheme[]);
    /**
     * Returns the options used to initialize this treeView
     */
    getConfig(): BSTreeViewOptions;
    /**
     * Returns the dom element to which the treeview is attached to
     */
    getTreeElement(): HTMLElement;
    /**
     * Initialize the treeView using the given options
     * @private
     * @internal
     * @param options
     */
    _init(options: BSTreeViewOptions | Partial<BSTreeViewOptions>): void;
    /**
     * Asynchronously load the data for the tree, depending on the settings
     * @private
     * @internal
     * @param options
     */
    _load(options: BSTreeViewOptions): Promise<Partial<BSTreeViewNode>[]>;
    /**
     * Asynchronously load the data from a network source using fetch
     * @private
     * @internal
     * @param options
     */
    _loadRemoteData(options: BSTreeViewOptions): Promise<Partial<BSTreeViewNode>[]>;
    /**
     * Asynchronously load the data from the data property passed as options
     * @param options
     * @private
     * @internal
     */
    _loadLocalData(options: BSTreeViewOptions): Promise<Partial<BSTreeViewNode>[]>;
    /**
     * Destroys and remove this treeView from the DOM
     */
    remove(): void;
    /**
     * Destroy this instance
     * @private
     * @internal
     */
    _destroy(): void;
    /**
     * Unsubscribe the events for this treeView.
     * This includes the onEvent listeners passed by options and the click handler
     * @private
     * @internal
     */
    _unsubscribeEvents(): void;
    /**
     * Subscribe the events for this treeView.
     * This includes the onEvent listeners passed by options and the click handler
     * @private
     * @internal
     */
    _subscribeEvents(): void;
    /**
     * Trigger the given event type on the global DOM element using the options
     * @private
     * @internal
     * @param eventType The event type to trigger
     * @param data The data which is passed as detail.data
     * @param options
     */
    _triggerEvent(eventType: string, data: BSTreeViewNode[] | BSTreeViewNode, options?: BSTreeViewMethodOptions): void;
    /**
     * Call this function after changes to the tree have been made to regenerate the flat structures
     * @private
     * @internal
     */
    _updateFlatTreeMaps(): void;
    /**
     * Register the given node at this tree view. This is called in BSTreeViewNode::_updateChildHierarchy
     * @param node
     * @private
     * @internal
     */
    _registerNode(node: BSTreeViewNode): void;
    /**
     * Sort an unsorted flat representation of the tree by their nodeId.
     * This gives a flat list in the order which can be rendered
     * @private
     * @internal
     * @param nodes
     */
    _sortNodes(nodes: Map<string, BSTreeViewNode>): Map<string, BSTreeViewNode>;
    /**
     * This function is called when a node is clicked. The respective action is triggered depending on the type of the event target
     * @private
     * @internal
     * @param event
     */
    _clickHandler(event: Event): void;
    /**
     * This function updates the list of checked nodes (see this._checkedNodes)
     * @private
     * @internal
     */
    _inheritCheckboxChanges(): void;
    /**
     * Looks up the DOM for the closest parent list item to retrieve the
     * data attribute nodeid, which is used to look up the node in the flattened structure.
     * @private
     * @internal
     * @param target The element that should be searched for
     */
    _domToNode(target: HTMLElement): BSTreeViewNode;
    /**
     * Render the treeview and trigger EVENT_TRIGGERED at the end
     * @private
     * @internal
     */
    _render(): void;
    /**
     * Inject the inline style elements into the head
     * @private
     * @internal
     */
    _injectStyle(): void;
    /**
     * Construct the tree style CSS based on user options
     * @private
     * @internal
     */
    _buildStyle(): string;
    /**
     Returns an array of matching node objects.
     @param {String} pattern - A pattern to match against a given field
     @return {String} field - Field to query pattern against
     */
    findNodes(pattern: string, field: string): BSTreeViewNode[];
    /**
     * Returns the root nodes in the treeView
     */
    getRootNodes(): BSTreeViewNode[];
    /**
     * Returns the number of root nodes in the treeView
     */
    getRootNodesCount(): number;
    /**
     Returns a flat array of node objects ordered by their path.
     @return {Array} nodes - An array of all nodes
     */
    getNodes(): Map<string, BSTreeViewNode>;
    /**
     * Returns the number of all nodes in the treeView (including all children)
     */
    getNodesCount(): number;
    /**
     Returns parent nodes for given nodes, if valid otherwise returns undefined.
     @param {Array} nodes - An array of nodes
     @returns {Array} nodes - An array of parent nodes
     */
    getParents(nodes: BSTreeViewNode[] | BSTreeViewNode): BSTreeViewNode[];
    /**
     Returns an array of sibling nodes for given nodes, if valid otherwise returns undefined.
     @param {Array} nodes - An array of nodes
     @returns {Array} nodes - An array of sibling nodes
     */
    getSiblings(nodes: BSTreeViewNode[] | BSTreeViewNode): BSTreeViewNode[];
    /**
     Returns an array of selected nodes.
     @returns {Array} nodes - Selected nodes
     */
    getSelected(): BSTreeViewNode[];
    /**
     Returns an array of unselected nodes.
     @returns {Array} nodes - Unselected nodes
     */
    getUnselected(): BSTreeViewNode[];
    /**
     Returns an array of expanded nodes.
     @returns {Array} nodes - Expanded nodes
     */
    getExpanded(): BSTreeViewNode[];
    /**
     Returns an array of collapsed nodes.
     @returns {Array} nodes - Collapsed nodes
     */
    getCollapsed(): BSTreeViewNode[];
    /**
     Returns an array of checked nodes.
     @returns {Array} nodes - Checked nodes
     */
    getChecked(): BSTreeViewNode[];
    /**
     Returns an array of unchecked nodes.
     @returns {Array} nodes - Unchecked nodes
     */
    getUnchecked(): BSTreeViewNode[];
    /**
     Returns an array of disabled nodes.
     @returns {Array} nodes - Disabled nodes
     */
    getDisabled(): BSTreeViewNode[];
    /**
     Returns an array of enabled nodes.
     @returns {Array} nodes - Enabled nodes
     */
    getEnabled(): BSTreeViewNode[];
    /**
     Add nodes to the tree, at the specified position of parent
     @param {Array} nodes  - An array of nodes to add
     @param {optional Object} parentNode  - The node to which nodes will be added as children. Set null if it should be added to the root.
     @param {optional number} index  - Zero based insert index, where the node will be inserted. If not specified, the node will be added to the end of the list.
     @param {optional Object} options
     */
    addNode(nodes: BSTreeViewNode[] | BSTreeViewNode, parentNode?: BSTreeViewNode | null, index?: number, options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Add nodes to the tree after given node.
     @param {Array} nodes  - An array of nodes to add
     @param {Object} node  - The node to which nodes will be added after
     @param {optional Object} options
     */
    addNodeAfter(nodes: BSTreeViewNode[] | BSTreeViewNode, node: BSTreeViewNode, options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Add nodes to the tree before given node.
     @param {Array} nodes  - An array of nodes to add
     @param {Object} node  - The node to which nodes will be added before
     @param {optional Object} options
     */
    addNodeBefore(nodes: BSTreeViewNode[] | BSTreeViewNode, node: BSTreeViewNode, options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Removes given nodes from the tree.
     @param {Array} nodes  - An array of nodes to remove
     @param _options
     */
    removeNode(nodes: BSTreeViewNode[] | BSTreeViewNode, _options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Updates / replaces a given tree node
     @param {Object} node  - A single node to be replaced
     @param {Object} newNode  - THe replacement node
     @param {optional Object} _options
     */
    updateNode(node: BSTreeViewNode, newNode: BSTreeViewNode, _options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Selects given tree nodes
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    selectNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewSelectOptions>): this;
    /**
     Unselects given tree nodes
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    unselectNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewSelectOptions>): this;
    /**
     * Selects all currently unselected nodes.
     * @param options
     */
    selectAll(options?: Partial<BSTreeViewSelectOptions>): this;
    /**
     * Unselects all currently selected nodes.
     * @param options
     */
    unselectAll(options?: Partial<BSTreeViewSelectOptions>): this;
    /**
     Toggles a node selected state; selecting if unselected, unselecting if selected.
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    toggleNodeSelected(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewSelectOptions>): this;
    /**
     Collapse all tree nodes
     @param {optional Object} options
     */
    collapseAll(options?: Partial<BSTreeViewExpandOptions>): this;
    /**
     Collapse a given tree node
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    collapseNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewExpandOptions>): this;
    /**
     Expand all tree nodes
     @param {optional Object} options
     */
    expandAll(options?: Partial<BSTreeViewExpandOptions>): this;
    /**
     Expand given tree nodes
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    expandNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewExpandOptions>): this;
    /**
     * Expands the given nodes by the given number of levels
     * @private
     * @internal
     * @param nodes
     * @param level
     * @param options
     */
    _expandLevels(nodes: BSTreeViewNode[] | BSTreeViewNode, level: number, options?: Partial<BSTreeViewExpandOptions>): this;
    /**
     Reveals given tree nodes, expanding the tree from node to root.
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    revealNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewExpandOptions>): this;
    /**
     Toggles a node's expanded state; collapsing if expanded, expanding if collapsed.
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    toggleNodeExpanded(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewExpandOptions>): this;
    /**
     Check all tree nodes
     @param {optional Object} options
     */
    checkAll(options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Checks given tree nodes
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    checkNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Uncheck all tree nodes
     @param {optional Object} options
     */
    uncheckAll(options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Uncheck given tree nodes
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    uncheckNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Toggles a node's checked state; checking if unchecked, unchecking if checked.
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    toggleNodeChecked(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     Saves the current state of checkboxes as default, cleaning up any highlighted changes
     */
    unmarkCheckboxChanges(): this;
    /**
     Disable all tree nodes
     @param {optional Object} options
     */
    disableAll(options?: Partial<BSTreeViewDisableOptions>): this;
    /**
     Disable given tree nodes
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    disableNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewDisableOptions>): this;
    /**
     Enable all tree nodes
     @param {optional Object} options
     */
    enableAll(options?: Partial<BSTreeViewDisableOptions>): this;
    /**
     Enable given tree nodes
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    enableNode(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewDisableOptions>): this;
    /**
     Toggles a node's disabled state; disabling is enabled, enabling if disabled.
     @param {Array} nodes - An array of nodes
     @param {optional Object} options
     */
    toggleNodeDisabled(nodes: BSTreeViewNode[] | BSTreeViewNode, options?: Partial<BSTreeViewDisableOptions>): this;
    /**
     Searches the tree for nodes (text) that match given criteria
     @param {String} pattern - A given string to match against
     @param {optional Object} options - Search criteria options
     @return {Array} nodes - Matching nodes
     */
    search(pattern: string, options?: Partial<BSTreeSearchOptions>): BSTreeViewNode[];
    /**
     * Clears previous search results
     */
    clearSearch(options?: Partial<BSTreeSearchOptions>): this;
    /**
     * Returns all nodes that were found by the last search
     */
    getSearchResults(): BSTreeViewNode[];
    /**
     * @internal
     * @private
     * @param a
     * @param b
     */
    _diffArray<T>(a: Array<T>, b: Array<T>): T[];
    /**
     Find nodes that match a given criteria
     @internal
     @private
     @param {String} pattern - A given string to match against
     @param {optional String} attribute - Attribute to compare pattern against
     @param {optional String} modifier - Valid RegEx modifiers
     @return {Array} nodes - Nodes that match your criteria
     */
    _findNodes(pattern: string, attribute?: string, modifier?: string): BSTreeViewNode[];
    /**
     Recursive find for retrieving nested attributes values
     All values are return as strings, unless invalid
     @private
     @internal
     @param {Object} obj - Typically a node, could be any object
     @param {String} attr - Identifies an object property using dot notation
     @return {String} value - Matching attributes string representation
     */
    _getNodeValue(obj: object, attr: string): string;
}
