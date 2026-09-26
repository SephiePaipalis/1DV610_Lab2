/**
 * Represents a group of actions.
 */
export class ControlGroup {

    #name

    /**
     * Creates new control group
     */
    constructor() {
        this.#name = this.#name
    }

    /**
     * Returns name of the group.
     * 
     * @returns {string} - Group name.
     */
    getName() {
        return this.#name
    }
}