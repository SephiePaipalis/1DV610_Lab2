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

console.log('<<=== Game Controls Demo ===>>')
console.log('Profile:', controls.getActiveProfile().getName())
console.log('Action:', jump.getName())
console.log('Bound input: SPACE')

console.log('Pressing SPACE...')
controls.press('SPACE')
console.log('Jump active:', controls.isActionActive('Jump'))

console.log('Releasing SPACE...')
controls.release('SPACE')
console.log('Jump active:', controls.isActionActive('Jump'))

console.log('Disabling Jump...')
jump.disable()
controls.press('SPACE')
console.log('Jump active:', controls.isActionActive('Jump'))

console.log('Pressing SPACE...')
controls.press('SPACE')
console.log('Jump active:', controls.isActionActive('Jump'))

console.log('Enabling Jump...')
jump.enable()
controls.press('SPACE')
console.log('Jump active:', controls.isActionActive('Jump'))

controls.release('SPACE')