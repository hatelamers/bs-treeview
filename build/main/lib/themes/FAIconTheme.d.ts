import BSTreeViewOptions from '../BSTreeViewOptions';
import BSTreeViewTheme from './BSTreeViewTheme';
/**
 * Use this theme to use Font Awesome icons in the treeview.
 */
declare class FAIconThemeClass implements BSTreeViewTheme {
    getOptions(): Partial<BSTreeViewOptions>;
}
declare const _default: FAIconThemeClass;
export default _default;
