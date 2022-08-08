import BSTreeViewOptions from "../BSTreeViewOptions";
import BSTreeViewTheme from "./BSTreeViewTheme";

class BS5ThemeClass implements BSTreeViewTheme {
    getOptions(): Partial<BSTreeViewOptions> {
        return {
            tagsClass: "badge bg-secondary",
            selectedBackColor: "var(--bs-primary)",
            selectedColor: "var(--bs-white)",
            onhoverColor: "var(--bs-light)",
            searchResultBackColor: "var(--bs-info)",
            searchResultColor: "var(--bs-white)",
        }
    }
}

export default new BS5ThemeClass();
