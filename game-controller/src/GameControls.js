import { ControlProfile } from './ControlProfile.js'

/**
 * Main point for managing game controls.
 */
export class GameControls {

    #profiles

    /**
     * Create a new game control manager.
     */
    constructor() {
        this.#profiles = []
    }

    /**
     * Returns profiles.
     * 
     * @returns {Array} - The control profiles.
     */
    getProfiles() {
        return this.#profiles
    }

    addProfile(profile) {
        this.#profiles.push(profile)
    }

    getProfile(name) {
        for (const profile of this.#profiles) {
            if (profile.getName() === name) {
                return profile
            }
        }

        return null
    }
}