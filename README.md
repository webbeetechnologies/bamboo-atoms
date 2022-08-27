## Bamboo Shoots
There are three fundamental parts to Bamboo shoots
1. Dependency Injection
2. Performant cross-platform low-level components/hooks
3. Theming


#### What problems do we intend to solve?

Other available libraries implement an API that is complicated and often deviate from the react native implementation. You should only need to read react-native documentation to write your components.
Case in point, libraries implementing _textStyle, _containerStyle props that would be passed down from one component to the other
Complex theming: You should have to write your styles once, while still enabling customising styles for certain special sections.
eg. Build custom styles for text and buttons in modals or headers
Complex component composition; time and again, and especially in react native, you need to import a specifically styled component through out your component tree to ensure a consistent UI.






#### Shoots aims to


Be a minimal, un-opinionated dependency (styles and components) injection library.

Be a performant, thoroughly (automation) tested, and highly theme-able repository of building block components to create quality cross-platform production grade complex components.

Export a barely styled set of low-level components that are a drop in replacement for react-native components.

Provide an efficient way to compose complex elements using dependency injection principals. Bamboo Shoots provides an easily configurable component store and a neat useComponent hook that gives you the component specific for the current context.

Provide a simplified and elegant way to create and inject themes. Shoot has light/dark modes built-in and also enables custom component theming at a component specific level. An efficient useTheme hook is available to deliver a refined experience.





#### Shoots is not

Though it enables complex theming, it is not a design library.

A high level component library that would otherwise actually create a product.


## Design Patterns
// TODO: Add design patterns


## Build Setup

``` bash
# install dependencies
yarn

# install dependencies for the library and examples
yarn bootstrap

# run expo example app
yarn run:example

# bundling
yarn prepare

# packaging (will get .tgz file)
npm pack
```
