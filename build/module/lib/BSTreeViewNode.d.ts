import BSTreeView from './BSTreeView';
import BSTreeViewDisableOptions from './BSTreeViewDisableOptions';
import BSTreeViewMethodOptions from './BSTreeViewMethodOptions';
import BSTreeViewNodeState from './BSTreeViewNodeState';
import BSTreeViewOptions from './BSTreeViewOptions';
import BSTreeViewSelectOptions from './BSTreeViewSelectOptions';
/**
 * This class describes a node of an BSTreeView
 */
export default class BSTreeViewNode {
    /** The text value displayed for a given tree node, typically to the right of the nodes icon. (Mandatory) */
    text: string;
    /** The icon displayed on a given node, typically to the left of the text. (Optional) */
    icon: string;
    /** The URL to an image displayed on a given node, overrides the icon. (Optional) */
    image: string;
    /** The icon displayed on a given node when selected, typically to the left of the text. (Optional) */
    selectedIcon: string;
    /** The foreground color used on a given node, overrides global color option. (Optional) */
    color: string;
    /** The background color used on a given node, overrides global color option. (Optional) */
    backColor: string;
    /** The color used on a given node's icon. (Optional) */
    iconColor: string;
    /** The color used under a given node's background icon. (Optional) */
    iconBackground: string;
    /** Whether a node is selectable in the tree. False indicates the node should act as an expansion heading and will not fire selection events. Default true */
    selectable: boolean;
    /** Whether a node is checkable in the tree, used in conjunction with showCheckbox. Default true */
    checkable: boolean;
    /** The current state of this node. See @BSTreeViewNodeState for more details */
    state: BSTreeViewNodeState;
    /** Used in conjunction with global showTags option to add additional information to the right of each node; using Bootstrap Badges, A tag can be an object with properties 'text' for tag value and 'class' for class names(s) of this tag **/
    tags: string[] | Record<string, string>[];
    /** List of per-node HTML data- attributes to append. */
    dataAttr: Record<string, string>;
    /** Custom HTML id attribute */
    id: string;
    /** List of custom CSS classes to append, separated by space. */
    class: string;
    /** Used to hide the checkbox of the given node when showCheckbox is set to true */
    hideCheckbox: boolean;
    nodes: BSTreeViewNode[];
    /** The tooltip value displayed for a given tree node on mouse hover. (Optional) */
    tooltip: string;
    href: string;
    /** Adds an expand icon to the node even if it has no children, it calls the lazyLoad() function (described below) upon the first expand. Default: false (Optional) */
    lazyLoad: boolean;
    /** Sets the class of node tags. Default null **/
    tagsClass: string;
    /**
     * The dom element representing this node
     * @private
     * @internal
     */
    _domElement: HTMLElement;
    /**
     * The elements used to build the node level indentation
     * @private
     * @internal
     */
    _domIndents: HTMLElement[];
    /**
     * The expand icon displayed on a given node, typically to the left of the text. (Optional)
     * @private
     * @internal
     */
    _domIconExpand: HTMLElement;
    /**
     * The element representing the checkbox on this element
     * @private
     * @internal
     */
    _domCheckbox: HTMLElement;
    /**
     * The element representing the (user definable) icon on this element
     * @private
     * @internal
     */
    _domIcon: HTMLElement;
    /**
     * The element representing the image description of this element
     * @private
     * @internal
     */
    _domImage: HTMLElement;
    /**
     * The elements of badges on this treeview
     * @private
     * @internal
     */
    _domBadges: HTMLElement[];
    /**
     * The span in which the text of this node is contained
     * @private
     * @internal
     */
    _domText: HTMLElement;
    /**
     * Whether this node is marked as a search result or not
     * @internal
     * @private
     */
    _searchResult: boolean;
    /** The hierarchy level this node is at.
     * @private
     * @internal
     */
    _level: number;
    /** The index of this entry in the parent's children array.
     * @private
     * @internal
     */
    _index: number;
    /**
     * The internal node ID. This is used to identify the node in the treeview via its path
     * @private
     * @internal
     */
    _nodeId: string;
    /**
     * The parent of this node if it is existing
     * @private
     * @internal
     */
    _parentNode: BSTreeViewNode | null;
    /**
     * The options of the treeview this node belongs to
     * @private
     * @internal
     */
    _options: BSTreeViewOptions;
    /**
     * The treeview this node belongs to
     * @private
     * @internal
     */
    _treeView: BSTreeView;
    /**
     * Create a new TreeViewNode
     * @param treeView The treeview this node belongs to
     */
    constructor(treeView: BSTreeView);
    /**
     * Returns the nodeID of the parent node
     * Returns null, if this element has no parent
     */
    get parentId(): string | null;
    /**
     * Returns true, if this node is a root node (meaning it has no parent). False otherwise.
     */
    isRootNode(): boolean;
    /**
     * Returns true, if this node is a child node, meaning it has a parent node. False otherwise.
     */
    isChildNode(): boolean;
    /**
     * Returns true, if this node is an end node, meaning it has no child nodes. False otherwise.
     */
    isEndNode(): boolean;
    /**
     * Returns true, if this node has children.
     */
    hasChildren(): boolean;
    /**
     * Returns the children of this node
     */
    getChildren(): BSTreeViewNode[];
    /**
     * Returns the number of children of this node
     */
    getChildrenCount(): number;
    /**
     * Returns the parent node of this node, or null if no parent exists
     */
    getParentNode(): BSTreeViewNode | null;
    /**
     * Returns the level of this node in the treeview
     * Please note that the value is only correct after the nodes have been rendered
     */
    getLevel(): number;
    /**
     * The treeview this node belongs to
     */
    getTreeView(): BSTreeView;
    /**
     * Create a new node object from partial data object, containing the properties which should be set on the node.
     * This function creates the children nodes objects from the data object recursively.
     * @param data An object with the properties which should be set on the node.
     * @param treeView The treeview this node belongs to
     */
    static fromData(data: Partial<BSTreeViewNode>, treeView: BSTreeView): BSTreeViewNode;
    /**
     * Update the children nodes for hierarchy, by setting the right values for parent, level and index.
     * All children nodes are registered then at the treeview. Beware that this node itself is not registered!
     * Also, hierarchically dependent node properties are set here. This function is called recursively.
     * @private
     * @internal
     */
    _updateChildrenHierarchy(): void;
    /**
     * Creates the underlying HTMLElement for this node and updates its properties.
     * @private
     * @internal
     */
    _renderNode(): HTMLElement;
    /**
     * Recursively set the aria-owns attribute of this element to make the hierarchy accessible
     * This is only possible after the tree is rendered
     */
    _setAriaOwnsValue(): void;
    /**
     * Recursively removes this node and all its children from the Dom
     * @private
     * @internal
     */
    _removeNodeEl(): void;
    /**
     * Create the given event on the nodes element. The event bubbles the DOM upwards. Details about the node and the used treeView are passed via event.detail
     * @param eventType The name of the event to generate (see EVENT_* constants in BSTreeViewEventNames)
     * @param options
     * @private
     * @internal
     */
    _triggerEvent(eventType: string, options?: Partial<BSTreeViewMethodOptions>): void;
    /**
     * Toggle the disabled state of this node
     * @param options
     */
    toggleDisabled(options?: Partial<BSTreeViewDisableOptions>): this;
    /**
     * Toggle the expanded state of this node (if it was expanded, it will be collapsed, and vice versa)
     * @param options
     */
    toggleExpanded(options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     * Perform the lazy load on this node, using the lazyLoad function if present
     * @private
     * @internal
     */
    _lazyLoad(): void;
    /**
     * Sets the expanded state of this node.
     * @param state True, if the node should be expanded, false to collapse it.
     * @param options
     */
    setExpanded(state: boolean, options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     * Changes the visibility state of this node.
     * Mostly useful for internal use
     * @internal
     * @private
     * @param state
     * @param options
     */
    _setVisible(state: boolean, options?: Partial<BSTreeViewMethodOptions>): void;
    /**
     * Toggle the selected state of this node
     * @param options
     */
    toggleSelected(options?: Partial<BSTreeViewSelectOptions>): this;
    /**
     * Sets the selected state of this node
     * @param state The new state of the node
     * @param options
     */
    setSelected(state: boolean, options?: Partial<BSTreeViewSelectOptions>): this;
    /**
     * Toggle the checked state of this node
     * @param options
     */
    toggleChecked(options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     * Sets the checked state of this node
     * @param state
     * @param options
     */
    setChecked(state: boolean, options?: Partial<BSTreeViewMethodOptions>): this;
    /**
     * Sets the disabled state of this node
     * @param state true to disable, false to enable
     * @param options
     */
    setDisabled(state: boolean, options?: Partial<BSTreeViewDisableOptions>): this;
    /**
     * This function creates the _domCheckbox element and add it to the dom if a checkbox should be shown
     * @private
     * @internal
     */
    _addCheckbox(): void;
    /**
     * This function creates the _domIcon element and add it to the dom if an icon should be shown
     * @private
     * @internal
     */
    _addIcon(): void;
    /**
     * This function creates the _domImage element and add it to the dom if an image should be shown
     * @private
     * @internal
     */
    _addImage(): void;
    /**
     * Sets whether this node is a highlighted as search result or not.
     * @internal
     * @private
     * @param state
     * @param options
     */
    _setSearchResult(state: boolean, options?: Partial<BSTreeViewMethodOptions>): void;
}
