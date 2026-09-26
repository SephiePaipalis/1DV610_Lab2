import test from 'node:test'
import assert from 'node:assert/strict'
import { Action } from '../src/Action.js'
import { Binding } from '../src/Binding.js'
import { ControlGroup } from '../src/ControlGroup.js'

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

test('Action can be disabled', () => {
    const action = new Action('jump')

    action.disable()

    assert.equal(action.isEnabled(), false)
})

test ('Action can be enabled', () => {
    const action = new Action('jump')

    action.disable()
    action.enable()

    assert.equal(action.isEnabled(), true)
})

test ('Action is active when binding is pressed', () => {
    const action = new Action('jump')
    const binding = new Binding('SPACE')

    action.addBinding(binding)
    binding.press()

    assert.equal(action.isActive(), true)
})

test ('Action is not active when no binding is pressed', () => {
    const action = new Action('jump')
    const binding = new Binding('SPACE')

    action.addBinding(binding)

    assert.equal(action.isActive(), false)
})

test ('Disabled action is not active when binding is pressed', () => {
    const action = new Action('jump')
    const binding = new Binding('SPACE')

    action.addBinding(binding)
    binding.press()
    action.disable()

    assert.equal(action.isActive(), false)
})

test ('Action can remove binding', () => {
    const action = new Action('Jump')
    const binding = new Binding('SPACE')

    action.addBinding(binding)
    action.removeBinding('SPACE')
    
    assert.equal(action.getBindings().length, 0)
})

test ('Action keeps other bindings when removing a binding', () => {
    const action = new Action('Jump')
    const spaceBinding = new Binding('SPACE')
    const wBinding = new Binding('W')

    action.addBinding(spaceBinding)
    action.addBinding(wBinding)
    action.removeBinding('SPACE')

    assert.equal(action.getBindings().length, 1)
    assert.equal(action.getBindings()[0], wBinding)
})

test('Action starts without groups', () => {
    const action = new Action('Jump')
    assert.equal(action.getGroups().length, 0)
})

test('Action can add a group', () => {
    const action = new Action('Jump')
    const group = new ControlGroup('Movement')

    action.addGroup(group)

    assert.equal(action.getGroups().length, 1)
    assert.equal(action.getGroups()[0], group)
})