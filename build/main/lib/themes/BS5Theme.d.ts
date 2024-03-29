import BSTreeViewOptions from '../BSTreeViewOptions';
import BSTreeViewTheme from './BSTreeViewTheme';
/**
 * Use this theme to style the treeview in a bootstrap 5 way.
 * It uses the CSS variables by bootstrap 5.
 */
declare class BS5ThemeClass implements BSTreeViewTheme {
    getOptions(): Partial<BSTreeViewOptions>;
}
declare const _default: BS5ThemeClass;
export default _default;
