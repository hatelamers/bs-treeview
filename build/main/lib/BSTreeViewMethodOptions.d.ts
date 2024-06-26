/**
 * The options for all kinds of functions in the TreeView
 */
export default class BSTreeViewMethodOptions {
    /** If true no events will be triggered by this action */
    silent: boolean;
    /**
     * Force a change of the node state, even if the value is not changed. Mostly useful for internal usage
     * @private
     * @internal
     */
    _force: boolean;
    constructor(options?: BSTreeViewMethodOptions | Partial<BSTreeViewMethodOptions>);
}
