import { Action } from './Action.js'
/**
 * Represents a control configuration with actions and groups.
 */
export class ControlProfile {

    #name
    #actions

    /**
     * Creates new control profile
     * 
     * @param {string} name - Profile name. 
     */
    constructor(name) {
        this.#name = name
        this.#actions = []
    }

    /**
     * Returns name of profile.
     * 
     * @returns {string} - Profile name.
     */
    getName() {
        return this.#name
    }

    getActions() {
        return this.#actions
    }
}