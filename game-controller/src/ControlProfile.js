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

    /**
     * Returns actions beloning to profile.
     * 
     * @returns {Array} - Profile actions.
     */
    getActions() {
        return this.#actions
    }

    /**
     * Adds an action to profile.
     * 
     * @param {Action} action - The action to add. 
     */
    addAction(action) {
        const alreadyExists = this.#actions.some(
            existingAction => existingAction.getName() === action.getName()
        )

        if (!alreadyExists) {
            this.#actions.push(action)
        }
    }
}