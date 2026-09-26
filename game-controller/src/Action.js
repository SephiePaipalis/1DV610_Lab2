import { Binding } from './Binding.js'
import { ControlGroup } from './ControlGroup.js'

/**
 * Represents an action that can be triggered by bindings.
 */
export class Action {
    #name
    #bindings
    #enabled
    #groups

    /**
     * Creates new action.
     */
    constructor(name) {
        this.#name = name
        this.#bindings = []
        this.#enabled = true
        this.#groups = []
    }

    /**
     * Returns name of action.
     * 
     * @returns {string} Action name.
     */
    getName() {
        return this.#name
    }

    /**
     * Returns action bindings.
     * 
     * @returns {Array} - Aciton bindings.
     */
    getBindings() {
        return this.#bindings
    }

    /**
     * Returns action groups.
     * 
     * @returns {Array} - Action groups.
     */
    getGroups() {
        return this.#groups
    }

    /**
     * Adds a group to action.
     * 
     * @param {ControlGroup} group - The group to add. 
     */
    addGroup(group) {
        if (!this.#groups.includes(group)) {
            this.#groups.push(group)
        }
    }

    /**
     * Adds binding to action.
     * 
     * @param {Binding} binding - The binding to add.
     */
    addBinding(binding) {
        const alreadyBound = this.#bindings.some(
            existingBinding => existingBinding.getInput() === binding.getInput()
        )

        if (!alreadyBound) {
            this.#bindings.push(binding)
        }
    }

    removeBinding(input) {
        this.#bindings = this.#bindings.filter(
            binding => binding.getInput() !== input
        )
    }

    /**
     * Checks if action is enabled.
     * 
     * @returns {boolean} - True if action is enabled.
     */
    isEnabled() {
        return this.#enabled
    }

    /**
     * Disables action.
     */
    disable() {
        this.#enabled = false
    }

    /**
     * Enables action.
     */
    enable() {
        this.#enabled = true
    }

    /**
     * Checks if action is currently active.
     * 
     * An action is active when its enabled and 
     * at least one of its bindings is pressed
     * 
     * @returns {boolean} - True if action is active.
     */
    isActive() {
        return this.#enabled && this.#bindings.some(
            binding => binding.isPressed()
        )
    }
}