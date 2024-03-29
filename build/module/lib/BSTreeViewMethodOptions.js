/**
 * The options for all kinds of functions in the TreeView
 */
export default class BSTreeViewMethodOptions {
    constructor(options = null) {
        /** If true no events will be triggered by this action */
        this.silent = false;
        /**
         * Force a change of the node state, even if the value is not changed. Mostly useful for internal usage
         * @private
         * @internal
         */
        this._force = false;
        Object.assign(this, options);
    }
}
