import test from 'node:test'
import assert from 'node:assert/strict'
import { GameControls } from '../src/GameControls.js'
import { ControlProfile } from '../src/ControlProfile.js'

test('GameControls starts without profiles', () => {
    const controls = new GameControls()

    assert.equal(controls.getProfiles().length, 0)
})

test('GameControls can add a profile', () => {
    const controls = new GameControls()
    const profile = new ControlProfile('Default')

    controls.addProfile(profile)

    assert.equal(controls.getProfiles().length, 1)
})

test('GameControls can find a profile via name', () => {
    const controls = new GameControls()
    const profile = new ControlProfile('Default')

    controls.addProfile(profile)

    assert.equal(controls.getProfile('Default'), profile)
})

test('GameControls does not add duplicate profile names', () => {
    const controls = new GameControls()
    const firstProfile = new ControlProfile('Default')
    const secondProfile = new ControlProfile('Default')

    controls.addProfile(firstProfile)
    controls.addProfile(secondProfile)

    assert.equal(controls.getProfiles().length, 1)
    assert.equal(controls.getProfiles()[0], firstProfile)
})