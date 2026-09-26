import test from 'node:test'
import assert from 'node:assert/strict'
import { ControlGroup } from '../src/ControlGroup.js'
import { Action } from '../src/Action.js'

test('ControlGroup stores name', () => {
    const group = new ControlGroup('Movement')
    assert.equal(group.getName(), 'Movement')
})

test ('ControlGroup is enabled by default', () => {
    const group = new ControlGroup('Movement')
    assert.equal(group.isEnabled(), true)
})

test('ControlGroup can be disabled', () => {
    const group = new ControlGroup('Movement')
    group.disable()
    assert.equal(group.isEnabled(), false)
})

test('ControlGoup can be enabled', () => {
    const group = new ControlGroup('Movement')
    group.disable()
    group.enable()
    assert.equal(group.isEnabled(), true)
})

test('ControlGroup starts without actions', () => {
    const group = new ControlGroup('Movement')
    assert.equal(group.getActions().length, 0)
})

test('ControlGroup can add an action', () => {
    const group = new ControlGroup('Movement')
    const action = new Action('Jump')

    group.addAction(action)

    assert.equal(group.getActions().length, 1)
    assert.equal(group.getActions()[0], action)
})

test('ControlGroup does not add the ssame action twice', () => {
    const group = new ControlGroup('Movement')
    const action = new Action('Jump')

    group.addAction(action)
    group.addAction(action)

    assert.equal(group.getActions().length, 1)
})