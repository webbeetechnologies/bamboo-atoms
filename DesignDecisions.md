## Implementation Details

### - Button
React Native button doesn't allow user to add children property and required us to use a title property.
For those reasons, we've decided to use Pressable component that allows to add children and isn't opinionated to use the title property.

### - Typography, textFactory function
textFactory function accepts a prop called defaultStyles which will be added directly to the style prop.
Each components that leverage this textFactory func will provide the defaultStyles object.
We opt out of using the theme context in this case because they're the minimal bare-bone styles and can be overridden anyway if the user add the similar style properties in the component theme.


### - Component Context
- Since we allow the user to inject their own components to the context, we've decided to let the users add their own types for the injected components and do the type-checking for that components themselves.

- Since the library at the core let the user replace the default components, we cannot validate that the injected components are similar to the ones that are being replaced due to the limitation of Typescript and the fact that different components have different way of declaring the types.
Due to these reasons, we've decided to let the user handle the type-checking of the injected components and we'll only be validating that the injected components are React Components.
