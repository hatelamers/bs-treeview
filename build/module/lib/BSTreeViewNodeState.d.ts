/**
 * This class describes the state of a node in the tree (e.g. if it is disabled, expanded, checked, etc.)
 */
export default class BSTreeViewNodeState {
    /** Whether a node is checked, normally represented by a checkbox icon. */
    checked: boolean | null;
    /** Whether a node is disabled (not selectable, expandable or checkable). */
    disabled: boolean;
    /** Whether or not a node is expanded i.e. open. */
    expanded: boolean | null;
    /** Whether or not a node is selected. */
    selected: boolean;
    /**
     * Whether this node is visible in the DOM.
     * @internal
     * @private
     */
    _visible: boolean;
}
