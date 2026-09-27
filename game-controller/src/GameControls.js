import { ControlProfile } from './ControlProfile.js'

/**
 * Main point for managing game controls.
 */
export class GameControls {

    #profiles
    #activeProfile

    /**
     * Create a new game control manager.
     */
    constructor() {
        this.#profiles = []
        this.#activeProfile = null
    }

    /**
     * Returns profiles.
     * 
     * @returns {Array} - The control profiles.
     */
    getProfiles() {
        return this.#profiles
    }

    /**
     * Adds a profile to this manager.
     * 
     * @param {ControlProfile} profile - The profile to add. 
     */
    addProfile(profile) {
        const alreadyExists = this.#profiles.some(
            existingProfile => existingProfile.getName() === profile.getName()
        )

        if (!alreadyExists) {
            this.#profiles.push(profile)
        }
    }

    /**
     * Set active control profile.
     * 
     * @param {string} name - Profile name. 
     */
    setActiveProfile(name) {
        const profile = this.getProfile(name)

        if (profile !== null) {
            this.#activeProfile = profile
        }
    }

    /**
     * Returns active control profile
     * 
     * @returns {ControlProfile} - The active profile or null if not found.
     */
    getActiveProfile() {
        return this.#activeProfile
    }

    /**
     * Presses an input from active control profile.
     * 
     * @param {string} input - Input to press
     */
    press(input) {
        const profile = this.#activeProfile

        if (profile === null) {
            return
        }

        const action = profile.getActionByInput(input)

        if (action === null) {
            return
        }

        for (const binding of action.getBindings()) {
            if (binding.getInput() === input) {
                binding.press()
            }
        }
    }

    /**
     * Releases an input in active profile.
     * 
     * @param {string} input - The input to release.
     */
    release(input) {
        const profile = this.#activeProfile

        if (profile === null) {
            return
        }

        const action = profile.getActionByInput(input)

        if (action === null) {
            return
        }

        for (const binding of action.getBindings()) {
            if (binding.getInput() === input) {
                binding.release()
            }
        }
    }

    /**
     * Finds control profile via name.
     * 
     * @param {string} name - Name of the profile to find.
     * @returns {ControlProfile} - Matching profile or null if not found.
     */
    getProfile(name) {
        for (const profile of this.#profiles) {
            if (profile.getName() === name) {
                return profile
            }
        }

        return null
    }
}