import { Binding } from './Binding.js'

/**
 * Represents an action that can be triggered by bindings.
 */
export class Action {
    #name
    #bindings

    /**
     * Creates new action.
     */
    constructor(name) {
        this.#name = name
        this.#bindings = []
    }

    /**
     * Returns name of action.
     * 
     * @returns {string} Action name.
     */
    getName() {
        return this.#name
    }
}