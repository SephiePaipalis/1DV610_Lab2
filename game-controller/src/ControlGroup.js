/**
 * Represents a group of actions.
 */
export class ControlGroup {

    #name
    #actions

    /**
     * Creates new control group
     */
    constructor(name) {
        this.#name = name
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

    isEnabled() {
        return this.#enabled
    }

    disable() {
        this.#enabled = false
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