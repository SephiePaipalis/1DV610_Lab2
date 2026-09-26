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