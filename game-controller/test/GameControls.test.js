import test from 'node:test'
import assert from 'node:assert/strict'
import { GameControls } from '../src/GameControls.js'
import { ControlProfile } from '../src/ControlProfile.js'
import { Action } from '../src/Action.js'

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

test('GameControls can set active profile', () => {
    const controls = new GameControls()
    const profile = new ControlProfile('Default')

    controls.addProfile(profile)
    controls.setActiveProfile('Default')

    assert.equal(controls.getActiveProfile(), profile)
})

test('GameControls can press an input', () => {
    const controls = new GameControls()
    const profile = new ControlProfile('Default')
    const action = new Action('Jump')

    profile.addAction(action)
    profile.bindAction('Jump', 'SPACE')

    controls.addProfile(profile)
    controls.setActiveProfile('Default')
    controls.press('SPACE')

    assert.equal(action.isActive(), true)
})

test('GameControls can release an input', () => {
    const controls = new GameControls()
    const profile = new ControlProfile('Default')
    const action = new Action('Jump')

    profile.addAction(action)
    profile.bindAction('Jump', 'SPACE')

    controls.addProfile(profile)
    controls.setActiveProfile('Default')

    controls.press('SPACE')
    controls.release('SPACE')

    assert.equal(action.isActive(), false)
})

test('GameControls can check if an action is active', () => {
    const controls = new GameControls()
    const profile = new ControlProfile('Default')
    const action = new Action('Jump')

    profile.addAction(action)
    profile.bindAction('Jump', 'SPACE')

    controls.addProfile(profile)
    controls.setActiveProfile('Default')

    assert.equal(controls.isActionActive('Jump'), false)

    controls.press('SPACE')

    assert.equal(controls.isActionActive('Jump'), true)

    controls.release('SPACE')

    assert.equal(controls.isActionActive('Jump'), false)
})