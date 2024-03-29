(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./BSTreeViewDisableOptions", "./BSTreeViewEventNames", "./BSTreeViewMethodOptions", "./BSTreeViewNodeState", "./BSTreeViewSelectOptions", "./BSTreeViewTemplate"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const BSTreeViewDisableOptions_1 = require("./BSTreeViewDisableOptions");
    const BSTreeViewEventNames_1 = require("./BSTreeViewEventNames");
    const BSTreeViewMethodOptions_1 = require("./BSTreeViewMethodOptions");
    const BSTreeViewNodeState_1 = require("./BSTreeViewNodeState");
    const BSTreeViewSelectOptions_1 = require("./BSTreeViewSelectOptions");
    const BSTreeViewTemplate_1 = require("./BSTreeViewTemplate");
    /**
     * This class describes a node of an BSTreeView
     */
    class BSTreeViewNode {
        /**
         * Create a new TreeViewNode
         * @param treeView The treeview this node belongs to
         */
        constructor(treeView) {
            /** Whether a node is selectable in the tree. False indicates the node should act as an expansion heading and will not fire selection events. Default true */
            this.selectable = true;
            /** Whether a node is checkable in the tree, used in conjunction with showCheckbox. Default true */
            this.checkable = true;
            /** The current state of this node. See @BSTreeViewNodeState for more details */
            this.state = new BSTreeViewNodeState_1.default();
            /** Adds an expand icon to the node even if it has no children, it calls the lazyLoad() function (described below) upon the first expand. Default: false (Optional) */
            this.lazyLoad = false;
            /** Sets the class of node tags. Default null **/
            this.tagsClass = null;
            /**
             * The dom element representing this node
             * @private
             * @internal
             */
            this._domElement = null;
            /**
             * The elements used to build the node level indentation
             * @private
             * @internal
             */
            this._domIndents = [];
            /**
             * The expand icon displayed on a given node, typically to the left of the text. (Optional)
             * @private
             * @internal
             */
            this._domIconExpand = null;
            /**
             * The element representing the checkbox on this element
             * @private
             * @internal
             */
            this._domCheckbox = null;
            /**
             * The element representing the (user definable) icon on this element
             * @private
             * @internal
             */
            this._domIcon = null;
            /**
             * The element representing the image description of this element
             * @private
             * @internal
             */
            this._domImage = null;
            /**
             * The elements of badges on this treeview
             * @private
             * @internal
             */
            this._domBadges = [];
            /**
             * The span in which the text of this node is contained
             * @private
             * @internal
             */
            this._domText = null;
            /** The hierarchy level this node is at.
             * @private
             * @internal
             */
            this._level = 1;
            /**
             * The parent of this node if it is existing
             * @private
             * @internal
             */
            this._parentNode = null;
            this.state = new BSTreeViewNodeState_1.default();
            this._treeView = treeView;
            this._options = treeView._options;
        }
        /**
         * Returns the nodeID of the parent node
         * Returns null, if this element has no parent
         */
        get parentId() {
            var _a;
            return (_a = this._parentNode._nodeId) !== null && _a !== void 0 ? _a : null;
        }
        /**
         * Returns true, if this node is a root node (meaning it has no parent). False otherwise.
         */
        isRootNode() {
            return this._parentNode === null;
        }
        /**
         * Returns true, if this node is a child node, meaning it has a parent node. False otherwise.
         */
        isChildNode() {
            return !this.isRootNode();
        }
        /**
         * Returns true, if this node is an end node, meaning it has no child nodes. False otherwise.
         */
        isEndNode() {
            return !this.hasChildren();
        }
        /**
         * Returns true, if this node has children.
         */
        hasChildren() {
            return this.nodes && this.nodes.length > 0;
        }
        /**
         * Returns the children of this node
         */
        getChildren() {
            return this.nodes;
        }
        /**
         * Returns the number of children of this node
         */
        getChildrenCount() {
            return this.nodes.length;
        }
        /**
         * Returns the parent node of this node, or null if no parent exists
         */
        getParentNode() {
            return this._parentNode;
        }
        /**
         * Returns the level of this node in the treeview
         * Please note that the value is only correct after the nodes have been rendered
         */
        getLevel() {
            return this._level;
        }
        /**
         * The treeview this node belongs to
         */
        getTreeView() {
            return this._treeView;
        }
        /**
         * Create a new node object from partial data object, containing the properties which should be set on the node.
         * This function creates the children nodes objects from the data object recursively.
         * @param data An object with the properties which should be set on the node.
         * @param treeView The treeview this node belongs to
         */
        static fromData(data, treeView) {
            const node = new BSTreeViewNode(treeView);
            //Apply our properties from data to our target node
            Object.assign(node, data);
            //Create children nodes from data
            if (data.nodes) {
                node.nodes = data.nodes.map((node) => BSTreeViewNode.fromData(node, treeView));
            }
            else {
                node.nodes = [];
            }
            //Assign state object
            if (data.state) {
                node.state = Object.assign(new BSTreeViewNodeState_1.default(), data.state);
            }
            return node;
        }
        /**
         * Update the children nodes for hierarchy, by setting the right values for parent, level and index.
         * All children nodes are registered then at the treeview. Beware that this node itself is not registered!
         * Also, hierarchically dependent node properties are set here. This function is called recursively.
         * @private
         * @internal
         */
        _updateChildrenHierarchy() {
            //If this node has no children we are done
            if (!this.hasChildren())
                return;
            const new_level = this._level + 1;
            // The virtual root node has level 0 and should not become parent of the real root nodes
            const parent = this._level > 0 ? this : null;
            this.nodes.forEach((node, index) => {
                // level : hierarchical tree level, starts at 1
                node._level = new_level;
                // index : relative to siblings
                node._index = index;
                // nodeId : unique, hierarchical identifier
                node._nodeId =
                    parent && parent._nodeId
                        ? parent._nodeId + '.' + node._index
                        : new_level - 1 + '.' + node._index;
                // We are the parent of our children nodes
                node._parentNode = parent;
                // convert the undefined string if hierarchical checks are enabled
                if (this._options.hierarchicalCheck &&
                    node.state.checked === null) {
                    node.state.checked = null;
                }
                // If no expanded state was passed as data (meaning it is null), set its value depending on the levels properties
                if (node.state.expanded === null) {
                    node.state.expanded =
                        !node.state.disabled &&
                            new_level < this._options.levels &&
                            node.hasChildren();
                }
                // set visible state; based parent state plus levels
                node.state._visible = !!((parent && parent.state && parent.state.expanded) ||
                    new_level <= this._options.levels);
                // recurse child nodes and transverse the tree, depth-first
                if (node.hasChildren()) {
                    node._updateChildrenHierarchy();
                }
                //Register our children nodes at the treeview
                this._treeView._registerNode(node);
            });
        }
        /**
         * Creates the underlying HTMLElement for this node and updates its properties.
         * @private
         * @internal
         */
        _renderNode() {
            //Create the node element from template if it is not existing
            if (!this._domElement) {
                this._domElement = BSTreeViewTemplate_1.default.node.cloneNode(true);
                this._domElement.classList.add('node-' + this._treeView._elementId);
            }
            else {
                this._domElement.innerHTML = '';
            }
            // Append .classes to the node
            if (this.class) {
                this._domElement.classList.add(...this.class.split(' '));
            }
            // Set the #id of the node if specified
            if (this.id) {
                this._domElement.id = this.id;
            }
            else {
                //Otherwise generate one
                this._domElement.id =
                    this._treeView._elementId + '-node-' + this._nodeId;
            }
            // Append custom data- attributes to the node
            if (this.dataAttr) {
                for (const key in this.dataAttr) {
                    if (this.dataAttr[key]) {
                        this._domElement.dataset[key] = this.dataAttr[key];
                    }
                }
            }
            // Set / update nodeid; it can change as a result of addNode etc.
            this._domElement.dataset.nodeId = this._nodeId;
            // Set the tooltip attribute if present
            if (this.tooltip) {
                this._domElement.title = this.tooltip;
            }
            // Add indent/spacer to mimic tree structure
            for (let i = 0; this._domIndents.length < this._level - 1 && i < this._level - 1; i++) {
                this._domIndents.push(BSTreeViewTemplate_1.default.indent.cloneNode(true));
            }
            this._domElement.append(...this._domIndents);
            // Add expand / collapse icon element or an empty spacer icons
            if (this.hasChildren() || this.lazyLoad) {
                this._domIconExpand = BSTreeViewTemplate_1.default.icon.expand.cloneNode(true);
                this._domElement.append(this._domIconExpand);
            }
            else {
                //Add an element for spacing
                this._domElement.append(BSTreeViewTemplate_1.default.icon.empty.cloneNode(true));
            }
            // Add checkbox and node icons
            if (this._options.checkboxFirst) {
                this._addCheckbox();
                this._addIcon();
                this._addImage();
            }
            else {
                this._addIcon();
                this._addImage();
                this._addCheckbox();
            }
            // Add text
            this._domText = BSTreeViewTemplate_1.default.text.cloneNode(true);
            this._domText.textContent = this.text;
            this._domElement.append(this._domText);
            //Assign an ID to the text element, so we can reference it later on the group
            this._domText.id =
                this._treeView._elementId + '-node-' + this._nodeId + '-label';
            //This element is labeled by the text element
            this._domElement.setAttribute('aria-labelledby', this._domText.id);
            // Add tags as badges
            if (this._options.showTags && this.tags) {
                this._domBadges = [];
                this.tags.forEach((tag) => {
                    const template = BSTreeViewTemplate_1.default.badge.cloneNode(true);
                    //Decide which class to use
                    if (typeof tag === 'object' && tag.class) {
                        //If the tag has its own class definition use this
                        template.classList.add(...tag.class.split(' '));
                    }
                    else if (this.tagsClass) {
                        //If this node has its own definition for the tagsClass use it
                        template.classList.add(...this.tagsClass.split(' '));
                    }
                    else {
                        //Otherwise use the global one
                        template.classList.add(...this._options.tagsClass.split(' '));
                    }
                    //Decide which text the text to use
                    if (typeof tag === 'object' && tag.text) {
                        template.innerText = tag.text;
                    }
                    else {
                        template.innerText = tag;
                    }
                    this._domBadges.push(template);
                });
                this._domElement.append(...this._domBadges);
            }
            // Normally the node will not be updated, if the value is already set to the same value.
            // Setting the options value to force, will force an update.
            // Set various node states
            this.setSelected(this.state.selected, { _force: true, silent: true });
            this.setChecked(this.state.checked, { _force: true, silent: true });
            this._setSearchResult(this._searchResult, {
                _force: true,
                silent: true,
            });
            this.setExpanded(this.state.expanded, { _force: true, silent: true });
            this.setDisabled(this.state.disabled, { _force: true, silent: true });
            this._setVisible(this.state._visible, { _force: true, silent: true });
            // Trigger nodeRendered event
            this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_RENDERED, new BSTreeViewMethodOptions_1.default());
            return this._domElement;
        }
        /**
         * Recursively set the aria-owns attribute of this element to make the hierarchy accessible
         * This is only possible after the tree is rendered
         */
        _setAriaOwnsValue() {
            if (this.hasChildren()) {
                const childIds = this.nodes.map((child) => child._domElement.id);
                this._domElement.setAttribute('aria-owns', childIds.join(' '));
                this.nodes.forEach((child) => child._setAriaOwnsValue());
            }
        }
        /**
         * Recursively removes this node and all its children from the Dom
         * @private
         * @internal
         */
        _removeNodeEl() {
            this.nodes.forEach((node) => {
                node._removeNodeEl();
            });
            this._domElement.remove();
        }
        /**
         * Create the given event on the nodes element. The event bubbles the DOM upwards. Details about the node and the used treeView are passed via event.detail
         * @param eventType The name of the event to generate (see EVENT_* constants in BSTreeViewEventNames)
         * @param options
         * @private
         * @internal
         */
        _triggerEvent(eventType, options = null) {
            if (options && !options.silent) {
                const event = new CustomEvent(eventType, {
                    detail: {
                        node: this,
                        eventOptions: options,
                        treeView: this._treeView,
                    },
                    bubbles: true,
                });
                this._domElement.dispatchEvent(event);
            }
        }
        /**
         * Toggle the disabled state of this node
         * @param options
         */
        toggleDisabled(options = new BSTreeViewDisableOptions_1.default()) {
            this.setDisabled(!this.state.disabled, options);
            return this;
        }
        /**
         * Toggle the expanded state of this node (if it was expanded, it will be collapsed, and vice versa)
         * @param options
         */
        toggleExpanded(options = new BSTreeViewMethodOptions_1.default()) {
            // Lazy-load the child nodes if possible
            if (typeof this._options.lazyLoad === 'function' && this.lazyLoad) {
                this._lazyLoad();
            }
            else {
                this.setExpanded(!this.state.expanded, options);
            }
            return this;
        }
        /**
         * Perform the lazy load on this node, using the lazyLoad function if present
         * @private
         * @internal
         */
        _lazyLoad() {
            if (!this.lazyLoad)
                return;
            // Show a different icon while loading the child nodes
            if (this._domIconExpand && this._domIcon) {
                this._domIcon.classList.remove(...this._options.expandIcon.split(' '));
                this._domIcon.classList.add(...this._options.loadingIcon.split(' '));
            }
            this._options.lazyLoad(this, (nodes) => {
                // Adding the node will expand its parent automatically
                this._treeView.addNode(nodes, this);
            });
            // Only the first expand should do a lazy-load
            this.lazyLoad = false;
        }
        /**
         * Sets the expanded state of this node.
         * @param state True, if the node should be expanded, false to collapse it.
         * @param options
         */
        setExpanded(state, options = new BSTreeViewMethodOptions_1.default()) {
            //Parse the passed options to an options object
            options = new BSTreeViewMethodOptions_1.default(options);
            // During rendered event, the options._force property is set
            if (!options._force && state === this.state.expanded)
                return this;
            if (state && this.hasChildren()) {
                // Set node state
                this.state.expanded = true;
                // Set element
                if (this._domIconExpand) {
                    this._domIconExpand.classList.remove(...this._options.expandIcon.split(' '));
                    this._domIconExpand.classList.remove(...this._options.loadingIcon.split(' '));
                    this._domIconExpand.classList.add(...this._options.collapseIcon.split(' '));
                }
                // Expand children
                this.nodes.forEach((node) => {
                    node._setVisible(true, options);
                });
                // Optionally trigger event
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_EXPANDED, options);
            }
            else if (!state) {
                // Set node state
                this.state.expanded = false;
                // Set element
                if (this._domIconExpand) {
                    this._domIconExpand.classList.remove(...this._options.collapseIcon.split(' '));
                    this._domIconExpand.classList.add(...this._options.expandIcon.split(' '));
                }
                // Collapse children
                this.nodes.forEach((node) => {
                    node._setVisible(false, options);
                    node.setExpanded(false, options);
                });
                // Optionally trigger event
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_COLLAPSED, options);
            }
            //Set aria-expanded state if possible
            if (this._domElement) {
                this._domElement.ariaExpanded = this.state.expanded
                    ? 'true'
                    : 'false';
            }
            return this;
        }
        /**
         * Changes the visibility state of this node.
         * Mostly useful for internal use
         * @internal
         * @private
         * @param state
         * @param options
         */
        _setVisible(state, options = new BSTreeViewMethodOptions_1.default()) {
            //Parse the passed options to an options object
            options = new BSTreeViewMethodOptions_1.default(options);
            if (!options._force && state === this.state._visible)
                return;
            this.state._visible = state;
            if (this._domElement) {
                //Add hidden class to our element
                if (state) {
                    this._domElement.classList.remove('node-hidden');
                }
                else {
                    this._domElement.classList.add('node-hidden');
                }
            }
        }
        /**
         * Toggle the selected state of this node
         * @param options
         */
        toggleSelected(options = new BSTreeViewSelectOptions_1.default()) {
            this.setSelected(!this.state.selected, options);
            return this;
        }
        /**
         * Sets the selected state of this node
         * @param state The new state of the node
         * @param options
         */
        setSelected(state, options = new BSTreeViewSelectOptions_1.default()) {
            //Parse the passed options to an options object
            options = new BSTreeViewSelectOptions_1.default(options);
            // We never pass options when rendering, so the only time
            // we need to validate state is from user interaction
            if (!options._force && state === this.state.selected)
                return this;
            if (state) {
                // If multiSelect false, unselect previously selected
                //TODO: Put this responsibility on the treeview using an Event
                if (!this._options.multiSelect) {
                    const selectedNodes = this._treeView._findNodes('true', 'state.selected');
                    selectedNodes.forEach((node) => {
                        options._unselecting = true;
                        node.setSelected(false, options);
                    });
                }
                // Set node state
                this.state.selected = true;
                // Set element
                if (this._domElement) {
                    this._domElement.classList.add('node-selected');
                    if ((this.selectedIcon || this._options.selectedIcon) &&
                        this._domIcon) {
                        this._domIcon.classList.remove(...(this.icon || this._options.nodeIcon).split(' '));
                        this._domIcon.classList.add(...(this.selectedIcon || this._options.selectedIcon).split(' '));
                    }
                }
                // Optionally trigger event
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_SELECTED, options);
            }
            else {
                // If preventUnselect true + only one remaining selection, disable unselect
                if (this._options.preventUnselect &&
                    options &&
                    //Allow to unselect if passed as option
                    !options._unselecting &&
                    !options.ignorePreventUnselect &&
                    this._treeView._findNodes('true', 'state.selected').length === 1) {
                    // Fire the nodeSelected event if reselection is allowed
                    if (this._options.allowReselect) {
                        this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_SELECTED, options);
                    }
                    return this;
                }
                // Set node state
                this.state.selected = false;
                // Set element
                if (this._domElement) {
                    this._domElement.classList.remove('node-selected');
                    if ((this.selectedIcon || this._options.selectedIcon) &&
                        this._domIcon) {
                        this._domIcon.classList.remove(...(this.selectedIcon || this._options.selectedIcon).split(' '));
                        this._domIcon.classList.add(...(this.icon || this._options.nodeIcon).split(' '));
                    }
                }
                // Optionally trigger event
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_UNSELECTED, options);
            }
            //Set aria-select state
            if (this._domElement) {
                this._domElement.ariaSelected = this.state.selected
                    ? 'true'
                    : 'false';
            }
            return this;
        }
        /**
         * Toggle the checked state of this node
         * @param options
         */
        toggleChecked(options = new BSTreeViewMethodOptions_1.default()) {
            if (this._options.hierarchicalCheck) {
                // Event propagation to the parent/child nodes
                const childOptions = new BSTreeViewMethodOptions_1.default(options);
                childOptions.silent =
                    options.silent || !this._options.propagateCheckEvent;
                let state;
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                let currentNode = this;
                // Temporarily swap the tree state
                this.state.checked = !this.state.checked;
                currentNode = this._treeView._nodes.get(currentNode.parentId);
                // Iterate through each parent node
                while (currentNode) {
                    // Calculate the state
                    state = currentNode.nodes.reduce((acc, curr) => {
                        return acc === curr.state.checked ? acc : null;
                    }, currentNode.nodes[0].state.checked);
                    // Set the state
                    currentNode.setChecked(state, childOptions);
                    currentNode = this._treeView._nodes.get(currentNode.parentId);
                }
                if (this.hasChildren()) {
                    // Copy the content of the array
                    let child, children = this.nodes.slice();
                    // Iterate through each child node
                    while (children && children.length > 0) {
                        child = children.pop();
                        // Set the state
                        child.setChecked(this.state.checked, childOptions);
                        // Append children to the end of the list
                        if (child.nodes && child.nodes.length > 0) {
                            children = children.concat(child.nodes.slice());
                        }
                    }
                }
                // Swap back the tree state
                this.state.checked = !this.state.checked;
            }
            this.setChecked(!this.state.checked, options);
            return this;
        }
        /**
         * Sets the checked state of this node
         * @param state
         * @param options
         */
        setChecked(state, options = new BSTreeViewMethodOptions_1.default()) {
            options = new BSTreeViewMethodOptions_1.default(options);
            // We never pass options when rendering, so the only time
            // we need to validate state is from user interaction
            if (!options._force && state === this.state.checked)
                return this;
            //TODO: Put this responsibility on the treeview using an Event
            // Highlight the node if its checkbox has unsaved changes
            if (this._options.highlightChanges) {
                const nodeNotInCheckList = this._treeView._checkedNodes.indexOf(this) == -1;
                if (nodeNotInCheckList == state) {
                    this._domElement.classList.add('node-check-changed');
                }
                else {
                    this._domElement.classList.remove('node-check-changed');
                }
            }
            if (state) {
                // Set node state
                this.state.checked = true;
                // Set element
                if (this._domElement) {
                    this._domElement.classList.add('node-checked');
                    this._domElement.classList.remove('node-checked-partial');
                    if (this._domCheckbox) {
                        this._domCheckbox.classList.remove(...this._options.uncheckedIcon.split(' '));
                        this._domCheckbox.classList.remove(...this._options.partiallyCheckedIcon.split(' '));
                        this._domCheckbox.classList.add(...this._options.checkedIcon.split(' '));
                    }
                }
                // Optionally trigger event
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_CHECKED, options);
            }
            else if (state === null && this._options.hierarchicalCheck) {
                // Set node state to partially checked
                this.state.checked = null;
                // Set element
                if (this._domElement) {
                    this._domElement.classList.add('node-checked-partial');
                    this._domElement.classList.remove('node-checked');
                    if (this._domCheckbox) {
                        this._domCheckbox.classList.remove(...this._options.uncheckedIcon.split(' '));
                        this._domCheckbox.classList.remove(...this._options.checkedIcon.split(' '));
                        this._domCheckbox.classList.add(...this._options.partiallyCheckedIcon.split(' '));
                    }
                }
                // Optionally trigger event, partially checked is technically unchecked
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_UNCHECKED, options);
            }
            else {
                // Set node state to unchecked
                this.state.checked = false;
                // Set element
                if (this._domElement) {
                    this._domElement.classList.remove('node-checked', 'node-checked-partial');
                    if (this._domCheckbox) {
                        this._domCheckbox.classList.remove(...this._options.checkedIcon.split(' '));
                        this._domCheckbox.classList.remove(...this._options.partiallyCheckedIcon.split(' '));
                        this._domCheckbox.classList.add(...this._options.uncheckedIcon.split(' '));
                    }
                }
                // Optionally trigger event
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_UNCHECKED, options);
            }
            this._domElement.ariaChecked = this.state.checked ? 'true' : 'false';
            return this;
        }
        /**
         * Sets the disabled state of this node
         * @param state true to disable, false to enable
         * @param options
         */
        setDisabled(state, options = new BSTreeViewDisableOptions_1.default()) {
            options = new BSTreeViewDisableOptions_1.default(options);
            // We never pass options when rendering, so the only time
            // we need to validate state is from user interaction
            if (!options._force && state === this.state.disabled)
                return this;
            if (state) {
                // Set node state to disabled
                this.state.disabled = true;
                // Disable all other states
                if (options && !options.keepState) {
                    this.setSelected(false, options);
                    this.setChecked(false, options);
                    this.setExpanded(false, options);
                }
                // Set element
                if (this._domElement) {
                    this._domElement.classList.add('node-disabled');
                }
                // Optionally trigger event
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_DISABLED, options);
            }
            else {
                // Set node state to enabled
                this.state.disabled = false;
                // Set element
                if (this._domElement) {
                    this._domElement.classList.remove('node-disabled');
                }
                // Optionally trigger event
                this._triggerEvent(BSTreeViewEventNames_1.EVENT_NODE_DISABLED, options);
            }
            return this;
        }
        /**
         * This function creates the _domCheckbox element and add it to the dom if a checkbox should be shown
         * @private
         * @internal
         */
        _addCheckbox() {
            if (this._options.showCheckbox &&
                (this.hideCheckbox === undefined || this.hideCheckbox === false)) {
                this._domCheckbox = BSTreeViewTemplate_1.default.icon.check.cloneNode(true);
                this._domElement.append(this._domCheckbox);
            }
        }
        /**
         * This function creates the _domIcon element and add it to the dom if an icon should be shown
         * @private
         * @internal
         */
        _addIcon() {
            if (this._options.showIcon &&
                (this.icon || this._options.nodeIcon) &&
                !(this._options.showImage && this.image)) {
                this._domIcon = BSTreeViewTemplate_1.default.icon.node.cloneNode(true);
                this._domIcon.classList.add(...(this.icon || this._options.nodeIcon).split(' '));
                this._domElement.append(this._domIcon);
            }
        }
        /**
         * This function creates the _domImage element and add it to the dom if an image should be shown
         * @private
         * @internal
         */
        _addImage() {
            if (this._options.showImage && this.image) {
                this._domImage = BSTreeViewTemplate_1.default.image.cloneNode(true);
                this._domImage.classList.add('node-image');
                this._domImage.style.backgroundImage = "url('" + this.image + "')";
                this._domElement.append(this._domImage);
            }
        }
        /**
         * Sets whether this node is a highlighted as search result or not.
         * @internal
         * @private
         * @param state
         * @param options
         */
        _setSearchResult(state, options = new BSTreeViewMethodOptions_1.default()) {
            options = new BSTreeViewMethodOptions_1.default(options);
            if (!options._force && state === this._searchResult)
                return;
            if (state) {
                this._searchResult = true;
                if (this._domElement) {
                    this._domElement.classList.add('node-result');
                }
            }
            else {
                this._searchResult = false;
                if (this._domElement) {
                    this._domElement.classList.remove('node-result');
                }
            }
        }
    }
    exports.default = BSTreeViewNode;
});
