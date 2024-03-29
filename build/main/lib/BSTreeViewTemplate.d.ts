/**
 * This class gives template elements for the tree view.
 * @internal
 * @private
 */
declare class BSTreeViewTemplate {
    tree: HTMLElement;
    node: HTMLElement;
    indent: HTMLElement;
    icon: {
        node: HTMLElement;
        expand: HTMLElement;
        check: HTMLElement;
        empty: HTMLElement;
    };
    image: HTMLElement;
    badge: HTMLElement;
    text: HTMLElement;
}
declare const _default: BSTreeViewTemplate;
export default _default;
