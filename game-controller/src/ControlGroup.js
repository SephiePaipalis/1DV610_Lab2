/**
 * Represents a group of actions.
 */
export class ControlGroup {

    #name
    #enabled
    #actions

    /**
     * Creates new control group
     */
    constructor(name) {
        this.#name = name
        this.#enabled = true
        this.#actions = []
    }

    /**
     * Returns name of the group.
     * 
     * @returns {string} - Group name.
     */
    getName() {
        return this.#name
    }

    /**
     * Checks if group is enabled.
     * 
     * @returns {boolean} True if group is enabled.
     */
    isEnabled() {
        return this.#enabled
    }

    /**
     * Disables group.
     */
    disable() {
        this.#enabled = false
    }

    /**
     * Enables group.
     */
    enable() {
        this.#enabled = true
    }

    /**
     * Returns actions in group.
     * 
     * @returns {Array} - Groups actions.
     */
    getActions() {
        return this.#actions
    }

    /**
     * Adds an action to group.
     * 
     * @param {object} action - Action to add. 
     */
    addAction(action) {
        if (!this.#actions.includes(action)) {
            this.#actions.push(action)
        }
    }
}