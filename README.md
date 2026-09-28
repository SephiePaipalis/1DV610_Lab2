# Game Controls

A reusable JavaScript module for managing configurable game controls.

## What does it do?

Game Controls lets developers create and manage:

* Control profiles
* Actions
* Input bindings
* Control groups
* Enabled/disabled actions and groups

The module also prevents the same input from being bound to multiple actions within the same profile.

## What does it not do?

The module does **not** listen directly to keyboard, mouse, or controller events.

Instead, the application tells the module when an input is pressed or released:

```javascript
controls.press('SPACE')
controls.release('SPACE')
```

This keeps the module independent from any particular game engine, UI framework, or input API.

## Installation

Clone the repository:

```bash
git clone https://github.com/SephiePaipalis/1DV610_Lab2.git
cd 1DV610_Lab2
```

No external runtime dependencies are required.

<details>
<summary><strong>Basic usage</strong></summary>

## Basic usage

```javascript
import { GameControls } from './src/GameControls.js'
import { ControlProfile } from './src/ControlProfile.js'
import { Action } from './src/Action.js'

const controls = new GameControls()
const profile = new ControlProfile('Default')

const jump = new Action('Jump')

profile.addAction(jump)
profile.bindAction('Jump', 'SPACE')

controls.addProfile(profile)
controls.setActiveProfile('Default')

controls.press('SPACE')

console.log(controls.isActionActive('Jump'))
// true
```

</details>

## API Reference

### `GameControls`

The main class used to manage control profiles and input state.

#### `addProfile(profile)`

Adds a control profile.

#### `getProfiles()`

Returns all registered profiles.

#### `setActiveProfile(name)`

Sets the active control profile by name.

#### `getActiveProfile()`

Returns the currently active profile.

#### `press(input)`

Marks an input as pressed in the active profile.

#### `release(input)`

Marks an input as released in the active profile.

#### `isActionActive(actionName)`

Checks whether an action is currently active.

---

<details>
<summary><strong>Action</strong></summary>

### `Action`

Represents an action that can be triggered by one or more bindings.

#### `addBinding(binding)`

Adds a binding to the action.

#### `removeBinding(input)`

Removes a binding by input.

#### `addGroup(group)`

Associates the action with a control group.

#### `getName()`

Returns the name of the action.

#### `getBindings()`

Returns the bindings belonging to the action.

#### `getGroups()`

Returns the control groups belonging to the action.

#### `enable()`

Enables the action.

#### `disable()`

Disables the action.

#### `isEnabled()`

Checks whether the action is enabled.

#### `isActive()`

Checks whether the action is currently active.

</details>

---

<details>
<summary><strong>Binding</strong></summary>

### `Binding`

Represents an input and whether it is currently pressed.

#### `getInput()`

Returns the input represented by the binding.

#### `press()`

Marks the binding as pressed.

#### `release()`

Marks the binding as released.

#### `isPressed()`

Checks whether the binding is currently pressed.

</details>

---

<details>
<summary><strong>ControlGroup</strong></summary>

### `ControlGroup`

Groups actions together so that they can be enabled or disabled as a unit.

#### `getName()`

Returns the name of the group.

#### `getActions()`

Returns the actions belonging to the group.

#### `addAction(action)`

Adds an action to the group.

#### `enable()`

Enables the group.

#### `disable()`

Disables the group.

#### `isEnabled()`

Checks whether the group is enabled.

</details>

---

<details>
<summary><strong>ControlProfile</strong></summary>

### `ControlProfile`

Represents a control configuration containing actions and control groups.

#### `getName()`

Returns the name of the profile.

#### `getActions()`

Returns the actions belonging to the profile.

#### `getGroups()`

Returns the groups belonging to the profile.

#### `addAction(action)`

Adds an action to the profile.

#### `addGroup(group)`

Adds a control group to the profile.

#### `bindAction(actionName, input)`

Binds an input to an action.

An input cannot be bound to multiple actions within the same profile.

#### `getAction(name)`

Finds an action by name.

#### `getActionByInput(input)`

Finds the action associated with an input.

</details>

## Example application

The repository contains a small example application in `test-app/example.js`.

It demonstrates creating a profile, adding an action, binding an input, pressing and releasing the input, and enabling/disabling the action.

Run it with:

```bash
node test-app/example.js
```

## Design and behavior

### Profiles

A `GameControls` instance can contain multiple control profiles. Only one profile is active at a time.

### Actions and bindings

An action can have multiple bindings, for example:

```text
Jump
 ├── SPACE
 └── W
```

However, within one profile, the same input cannot be assigned to multiple actions.

### Control groups

An action can belong to multiple control groups.

An action is active only when:

1. The action is enabled.
2. At least one of its bindings is pressed.
3. If it belongs to groups, at least one of those groups is enabled.

## Testing

The module uses Node.js's built-in test runner.

Run all tests with:

```bash
node --test
```

The current test suite contains 51 automated tests covering the public classes and their main behaviors.

## Dependencies and requirements

* JavaScript
* Node.js with ES module support
* No external runtime libraries are required.

## License

This project is released under the MIT License.
