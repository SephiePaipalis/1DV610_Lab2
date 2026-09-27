import readline from 'node:readline'
import { GameControls } from '../src/GameControls.js'
import { ControlProfile } from '../src/ControlProfile.js'
import { Action } from '../src/Action.js'

const controls = new GameControls()

const profile = new ControlProfile('Default')
const jump = new Action('Jump')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function showMenu() {
    console.log('')

    rl.question('Choose an option: ', handleChoice)
}

function handleChoice() {

}