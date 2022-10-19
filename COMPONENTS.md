# Bamboo Atoms - Components
You want to write memoized components that are themable out of the box.

Wrap an existing react-native component to enable theming.

Where necessary, create a building-block component with theming support.


### Acceptance Criteria:
- Performance of the component is comparable to an element native to the platform
- If a Bamboo Atoms component needs to be wrapped in another Bamboo Atoms component, you do not build it; it's already high level component.
- All components exported are themable.
- All components have built in support for dark/light modes.


### Exported Components:

- User Inputs
    - TextInput
    - Switch
    - Checkbox
    - Radio
    - Select
    - Button
- UI Elements
    - ActivityIndicator
    - View
    - ProgressBar
    - Divider
- Typography
    - Text
    - Underline
    - Italic
    - Strong
    - Heading
    - H1/H2/H3/H4/H5/h6
- Image
- Context
    - ProvideComponents/ConsumeComponents
    - ProvideTheme/ConsumeTheme



### Notes

Though Icon would be a low-level component, all developers have different preferences; feel free to inject the Icon component from the library of your choice.
Use the top level Component Context provider to inject the icons into your context.

```jsx
    // App.[js|tsx]
    export default App = () => (
        <ProvideComponents value={{ Icon: YourIconComponent }}>
            { ... }
        </ProvideComponents>
    )
```
