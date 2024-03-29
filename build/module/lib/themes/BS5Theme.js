/**
 * Use this theme to style the treeview in a bootstrap 5 way.
 * It uses the CSS variables by bootstrap 5.
 */
class BS5ThemeClass {
    getOptions() {
        return {
            tagsClass: 'badge bg-secondary',
            selectedBackColor: 'var(--bs-primary)',
            selectedColor: 'var(--bs-white)',
            onhoverColor: 'var(--bs-light)',
            searchResultBackColor: 'var(--bs-info)',
            searchResultColor: 'var(--bs-white)',
        };
    }
}
export default new BS5ThemeClass();
