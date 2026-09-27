import readline from 'node:readline'
import { GameControls } from '../src/GameControls.js'
import { ControlProfile } from '../src/ControlProfile.js'
import { Action } from '../src/Action.js'

const controls = new GameControls()

const profile = new ControlProfile('Default')
const jump = new Action('Jump')

profile.addAction(jump)
profile.bindAction('Jump', 'SPACE')

controls.addProfile(profile)
controls.setActiveProfile('Default')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function showMenu() {
    console.log('\n=== GAME CONTROLS DEMO ===')
    console.log('1. Press SPACE')
    console.log('2. Release SPACE')
    console.log('3. Check Jump')
    console.log('4. Quit')

    rl.question('Choose an option: ', handleChoice)
}

function handleChoice(choice) {
    switch (choice.trim()) {
        case '1':
            controls.press('SPACE')
            console.log('SPACE pressed.')
            break

        case '2':
            controls.release('SPACE')
            console.log('SPACE released.')
            break

        case '3':
            console.log(
                'Jump active:',
                controls.isActionActive('Jump')
            )
            break

        case '4':
            rl.close()
            return

        default:
            console.log('Invalid choice.')
    }

    showMenu()
}

showMenu()