import test from 'node:test'
import assert from 'node:assert/strict'
import { Action } from '../src/Action.js'
import { Binding } from '../src/Binding.js'

test('Action stores name', () => {
    const action = new Action('jump')

    assert.equal(action.getName(), 'jump')
})

test ('Action starts without bindings', () => {
    const action = new Action('jump')

    assert.equal(action.getBindings().length, 0)
})

test ('Action can add a binding', () => {
    const action = new Action('jump')
    const binding = new Binding('SPACE')

    action.addBinding(binding)

    assert.equal(action.getBindings().length, 1)
    assert.equal(action.getBindings()[0], binding)
})

test ('Action does not add same input twice', () => {
    const action = new Action('jump')
    const firstBinding = new Binding('SPACE')
    const secondBinding = new Binding('SPACE')

    action.addBinding(firstBinding)
    action.addBinding(secondBinding)

    assert.equal(action.getBindings().length, 1)
})

test ('Action can have different inputs', () => {
    const action = new Action('move')
    const spaceBinding = new Binding('SPACE')
    const wBinding = new Binding('W')

    action.addBinding(spaceBinding)
    action.addBinding(wBinding)

    assert.equal(action.getBindings().length, 2)
})

test('Action is enabled by default', () => {
    const action = new Action('jump')

    assert.equal(action.isEnabled(), true)
})