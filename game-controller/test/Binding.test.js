import test from 'node:test'
import assert from 'node:assert/strict'
import { Binding } from '../src/Binding.js'

test('Binding stores input', () => {
    const binding = new Binding('SPACE')

    assert.equal(binding.getInput(), 'SPACE')
})

test('Binding starts as not pressed', () => {
    const binding = new Binding('SPACE')

    assert.equal(binding.isPressed(), false)
})

test('Binding is pressed when pressed', () => {
    const binding = new Binding('SPACE')

    binding.press()

    assert.equal(binding.isPressed(), true)
})

test('Binding is not pressed after release', () => {
    const binding = new Binding('SPACE')

    binding.press()
    binding.release()

    assert.equal(binding.isPressed(), false)
})