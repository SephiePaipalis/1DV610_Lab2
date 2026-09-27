# Test Report

## Summary

The module was primarily tested using automated tests with Node.js's built-in runner. The tests cover the main classes and their public behavior, including bindings, actions, control groups, control profiles, and the main `GameControls` class. 

A separate test application in `test-app/TestExample.js` was also used to demonstrate how another programmer can use the module through its public interface. The test application creates a control profile and action, binds an input, activates and releases the input, and demonstrates enabling and disabling an action.

All automated tests were run with:

```bash
node --test
```

## Test Results

| What was tested                                                            | How it was tested                                                                                                                                                         | Result   |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `Binding` stores its input correctly.                                      | Automated unit test using Node.js's built-in test runner. A binding was created with an input and its stored input was checked.                                           | ✅ Passed |
| `Binding` press and release behavior.                                      | Automated unit tests checked that a new binding starts unpressed, becomes pressed after `press()`, and becomes unpressed after `release()`.                               | ✅ Passed |
| `Action` creation and basic properties.                                    | Automated unit tests checked the action name, initial bindings, and enabled state.                                                                                        | ✅ Passed |
| Adding and removing bindings from an `Action`.                             | Automated unit tests checked that bindings can be added and removed and that the same input is not added twice to one action.                                             | ✅ Passed |
| `Action` enable/disable behavior.                                          | Automated unit tests checked that an action can be disabled and enabled again, and that a disabled action is not active.                                                  | ✅ Passed |
| `Action` activation with bindings and groups.                              | Automated unit tests checked that an action becomes active when an appropriate binding is pressed and that disabled groups prevent the action from becoming active.       | ✅ Passed |
| `ControlGroup` creation and action management.                             | Automated unit tests checked group properties, adding actions, preventing duplicate actions, and the relationship between a group and an action.                          | ✅ Passed |
| `ControlGroup` enable/disable behavior.                                    | Automated unit tests checked that a group can be disabled and enabled again.                                                                                              | ✅ Passed |
| `ControlProfile` action and group management.                              | Automated unit tests checked adding actions and groups and preventing duplicate actions or groups with the same name.                                                     | ✅ Passed |
| `ControlProfile` input binding.                                            | Automated unit tests checked binding inputs to actions, multiple inputs for one action, and prevention of the same input being bound to different actions in one profile. | ✅ Passed |
| `ControlProfile` action lookup.                                            | Automated unit tests checked finding actions by name and finding actions by their bound input.                                                                            | ✅ Passed |
| `GameControls` profile management.                                         | Automated unit tests checked adding profiles, preventing duplicate profiles, finding profiles, and selecting the active profile.                                          | ✅ Passed |
| `GameControls` input handling.                                             | Automated unit tests checked pressing and releasing inputs and checking whether an action is active.                                                                      | ✅ Passed |
| `GameControls` behavior without an active profile or unknown action/input. | Automated unit tests checked that these situations are handled without incorrectly activating an action.                                                                  | ✅ Passed |
| Public API usage.                                                          | Manual run of `test-app/example.js`, which created a profile and action, bound `SPACE`, pressed and released it, and tested disabling/enabling the action.                | ✅ Passed |

**Total automated tests: 51**

**Passed: 51**

**Failed: 0**
