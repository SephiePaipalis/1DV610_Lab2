import test from 'node:test'
import assert from 'node:assert/strict'
import { ControlProfile } from '../src/ControlProfile.js'
import { Action } from '../src/Action.js'
import { Binding } from '../src/Binding.js'

test('ControlProfile stores name', () => {
    const profile = new ControlProfile('Default')

    assert.equal(profile.getName(), 'Default')
})

test('ControlProfile starts without actions', () => {
    const profile = new ControlProfile('Default')

    assert.equal(profile.getActions().length, 0)
})

test('ControlProfile can add an action', () => {
    const profile = new ControlProfile('Default')
    const action = new Action('Jump')

    profile.addAction(action)

    assert.equal(profile.getActions().length, 1)
    assert.equal(profile.getActions()[0], action)
})

test('ControlProfile does not add duplicates', () => {
    const profile = new ControlProfile('Default')
    const firstAction = new Action('jump')
    const secondAction = new Action('jump')

    profile.addAction(firstAction)
    profile.addAction(secondAction)

    assert.equal(profile.getActions().length, 1)
    assert.equal(profile.getActions()[0], firstAction)
})

test('ControlProfile can find an action by name', () => {
    const profile = new ControlProfile('Default')
    const action = new Action('Jump')

    profile.addAction(action)

    assert.equal(profile.getAction('Jump'), action)
})

test('ControlProfile returns null if action not found', () => {
    const profile = new ControlProfile('Default')

    assert.equal(profile.getAction('Jump'), null)
})

test('ControlProfile can bind an input to an action', () => {
    const profile = new ControlProfile('Default')
    const action = new Action('Jump')

    profile.addAction(action)
    profile.bindAction('Jump', 'SPACE')

    assert.equal(action.getBindings().length, 1)
    assert.equal(action.getBindings()[0].getInput(), 'SPACE')
})

test('ControlPrfile can bind multiple inputs to an action', () => {
    const profile = new ControlProfile('Default')
    const action = new Action('Jump')

    profile.addAction(action)
    profile.bindAction('Jump', 'SPACE')
    profile.bindAction('Jump', 'W')

    assert.equal(action.getBindings().length, 2)
    assert.equal(action.getBindings()[0].getInput(), 'SPACE')
    assert.equal(action.getBindings()[1].getInput(), 'W')
})

test('ControlProfile does not add duplicate inputs to action', () => {
    const profile = new ControlProfile('Default')
    const action = new Action('Jump')

    profile.addAction(action)

    profile.bindAction('Jump', 'SPACE')
    profile.bindAction('Jump', 'SPACE')

    assert.equal(action.getBindings().length, 1)
})

test('ControlProfile does not bind same input to diffferent actions', () => {
    const profile = new ControlProfile('Default')
    const jump = new Action('Jump')
    const attack = new Action('Attack')

    profile.addAction(jump)
    profile.addAction(attack)

    profile.bindAction('Jump', 'SPACE')
    profile.bindAction('Attack', 'SPACE')

    assert.equal(jump.getBindings().length, 1)
    assert.equal(attack.getBindings().length, 0)
})