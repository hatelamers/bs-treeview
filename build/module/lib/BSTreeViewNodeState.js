/**
 * This class describes the state of a node in the tree (e.g. if it is disabled, expanded, checked, etc.)
 */
export default class BSTreeViewNodeState {
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
