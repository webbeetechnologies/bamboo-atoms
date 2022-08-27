## Implementation Details

### - Component Context
- Since we allow the user to inject their own components to the context, we've decided to let the users add their own types for the injected components and do the type-checking for that components themselves.

- Since the library at the core let the user replace the default components, we cannot validate that the injected components are similar to the ones that are being replaced due to the limitation of Typescript and the fact that different components have different way of declaring the types.
Due to these reasons, we've decided to let the user handle the type-checking of the injected components and we'll only be validating that the injected components are React Components.
