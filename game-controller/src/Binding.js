/**
 * Represents an input binding.
 * 
 * The binding stores the input it reprsents and
 * if the input is pressed.
 */
export class Binding {
    #input
    #pressed

    /**
     * Creates a new binding.
     * 
     * @param {string} input - The input represented by this binding. 
     */
    constructor(input) {
        this.#input = input
        this.#pressed = false
    }

    /**
     * Returns the input represented by tihs binding.
     * 
     * @returns {string} - Bound input.
     */
    getInput() {
        return this.#input
    }
}