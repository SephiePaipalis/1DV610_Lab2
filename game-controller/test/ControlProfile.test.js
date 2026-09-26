import test from 'node:test'
import assert from 'node:assert/strict'
import { ControlProfile } from '../src/ControlProfile.js'
import { Action } from '../src/Action.js'

test('ControlProfile stores name', () => {
    const profile = new ControlProfile('Default')

    assert.equal(profile.getName(), 'Default')
})

test ('ControlProfile starts without actions', () => {
    const profile = new ControlProfile('Default')

    assert.equal(profile.getActions().length, 0)
})