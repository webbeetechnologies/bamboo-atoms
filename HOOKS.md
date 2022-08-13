# Bamboo Shoots - Hooks
You want to write memoized hooks.


### User Stories:
- As a developer, I want to make use of media queries to support responsiveness.
- As a developer, I want to use color modes in my custom components/hooks
- As a developer, I want to access my component and themes using hooks.


### Exported Hooks:
- useColorMode [dark/light modes; only top level]
- useMediaQuery [dependency: @expo/match-media, mandatory if useMediaQuery is used]
- useComponents [from component context]
- useTheme [from theme context, returns the theme for the component]
- useComponentTheme [args[0]: string; from theme context, returns a normalized (memoized) style object]


### Types
```ts
    useColorMode(): "dark" | "light";


    useMediaQuery(query: string, listener: (MediaQueryListEvent) => void): boolean;


    useComponents(): React.ComponentType<Props>;


    // Should be possible to define the type of the state.
    type Theme = Record<string, Record<string, any>;
    useTheme(): Theme;


    useComponentTheme(componentName: string): CSSStyleDeclaration;
```
