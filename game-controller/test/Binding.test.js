import test from 'node:test'
import assert from 'node:assert/strict'
import { Binding } from '../src/Binding.js'

test('Binding stores input', () => {
    const binding = new Binding('SPACE')

    assert.equal(binding.getInput(), 'SPACE')
})