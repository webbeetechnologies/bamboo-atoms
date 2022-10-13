import React from 'react';
import { useComponents } from 'bamboo-shoots';
import { Source } from '@storybook/addon-docs';
import { InjectedComponentTypes, withDocsWrapper } from '../../common';

const DocsPage = () => {
    const { View, H1, H3, Text, Code } = useComponents<InjectedComponentTypes>();

    return (
        <View>
            <H1>Theme Provider</H1>
            <Text>
                We use Context API for theming. <Code>ProvideTheme</Code> component accepts 2 props:{' '}
                <Code>theme</Code> and <Code>extractStyles</Code>. In <Code>theme</Code> props, we
                enter the object returned by the <Code>extractStyles</Code> function which let us
                extend the default theme, declare any custom properties inside the theme object that
                can be used anywhere or replaced the default properties.
            </Text>

            <Source language="tsx" code={firstCodeBlock} />

            <H3>extractStyles prop</H3>
            <Text>
                <Code>extractStyles</Code> prop accepts a function that returns a Style Object.
                {'\n'}
                It let us replace the function that calculates the all the styles that the default
                components will get.
                {'\n'}
                It gives us an object as an argument which as 4 properties: <Code>theme</Code>- the
                default theme object, <Code>componentName</Code> - the name of the default component
                or the custom component, <Code>colorMode</Code> - a default property inside the
                theme object, and <Code>style</Code> - style prop passed from the component
            </Text>
            <Text>
                The default components use <Code>useComponentStyles</Code> hook, under the hood,
                which leverages the default <Code>extractStyles</Code> function. And the user can
                replace it with their own implementation of <Code>extractStyles</Code> function and
                returns the component styles for the default components accordingly.
            </Text>
            <Text>
                <Code>useComponentStyles</Code> hook is used inside the default components to fetch
                and apply the individual component styles and apply them.
                {'\n'}
                That is why we can see the styles changes if we enter the theme styles for the
                default components in the theme provider.
            </Text>
            <Text>example: </Text>
            <Source language="tsx" code={secondCodeBlock} />

            <Text>
                We can consume the provided theme object using <Code>useTheme</Code> hook and
                <Code>useComponentStyles</Code> hook. Learn more about them in hooks section.
            </Text>
        </View>
    );
};

const firstCodeBlock = `
import {
    useComponents,
    ProvideTheme,
    extendTheme,
    IExtractStylesFuncArgs,
} from '@webbee/bamboo-atoms';

const customTheme = extendTheme({
    View: {
        width: 100,
        height: 100,

        dark: {
            backgroundColor: '#fff',
        },
        light: {
            backgroundColor: '#f5f5f5',
        },
    },
    Text: {
        color: '#444',
    },
});

export const Example = () => {
    const { View, Text } = useComponents();

    return (
        <ProvideTheme theme={customTheme}>
            <View>
                <Text>Styles from the provider</Text>
            </View>
        </ProvideTheme>
    );
};
`;

const secondCodeBlock = `
const extractStyles = ({ theme, componentName, colorMode, style }: IExtractStylesFuncArgs) => {
    const { dark = {}, light = {}, ...rest } = theme[componentName];

    // to make Text component only color: red
    return componentName === 'Text'
        ? { color: 'red', ...style }
        : { ...rest, ...(colorMode === 'light' ? light : dark), ...style };
};

...
export const Example = () => {
   ...
    return (
        <ProvideTheme theme={customTheme} extractStyles={extractStyles}>
            ...
        </ProvideTheme>
    );
}
...
`;

export default withDocsWrapper(DocsPage);
