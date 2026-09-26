import { Action } from './Action.js'
import { Binding } from './Binding.js'

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

    /**
     * Binds an input to an action in current profile.
     * 
     * @param {string} actionName - Name of action. 
     * @param {string} input - Input to bind.
     */
    bindAction(actionName, input) {
        const action = this.getAction(actionName)

        if (action === null) {
            return
        }

        for (const existingAction of this.#actions) {
            if (existingAction === action) {
                continue
            }

            for (const binding of existingAction.getBindings()) {
                if (binding.getInput() === input) {
                    return
                }
            }
        }

        const binding = new Binding(input)
        action.addBinding(binding)
    }

    /**
     * Finds action by its name.
     * 
     * @param {string} name - Name of action.
     * @returns {Action} - Matching action or null if not found.
     */
    getAction(name) {
        for (const action of this.#actions) {
            if (action.getName() === name) {
                return action
            }
        }

        return null
    }
}