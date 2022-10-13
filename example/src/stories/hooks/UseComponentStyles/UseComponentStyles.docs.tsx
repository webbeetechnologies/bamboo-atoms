import React from 'react';
import { useComponents } from 'bamboo-shoots';
import { Source } from '@storybook/addon-docs';
import { InjectedComponentTypes, withDocsWrapper } from '../../common';

const DocsPage = () => {
    const { View, H1, H3, Text, Code } = useComponents<InjectedComponentTypes>();

    return (
        <View>
            <H1>UseComponentStyles Hook</H1>
            <Text>
                We can get the theme styles of a default component using{' '}
                <Code>UseComponentStyles</Code> hook.
                {'\n'}
                It accept an argument called <Code>componentName</Code> in which we can enter the
                name of the component that we want to get the styles of.
            </Text>
            <Text>
                Under the hood, <Code>UseComponentStyles</Code> leverages the default{' '}
                <Code>extractTheme</Code> function. And if the user replace it with their own
                implementation of <Code>extractTheme</Code> function and returns the theme styles
                for the default components accordingly.
            </Text>
            <Text>
                <Code>UseComponentStyles</Code> hook is used inside the default components to fetch
                and apply the individual theme styles and apply them. That is why we can see the
                styles changes if we enter the theme styles for the default components in the theme
                provider.
            </Text>

            <H3>Example Usage</H3>
            <Source language="tsx" code={firstCodeBlock} />
        </View>
    );
};

const firstCodeBlock = `
import { useComponents, UseComponentStyles, ProvideTheme, extendTheme } from '@webbee/bamboo-atoms';

// this will return a deepmarged theme obj
const theme = extendTheme({
    Heading: {
        width: 300,
        marginBottom: 50,

        dark: {
            color: '#fff',
        },
        light: {
            color: '#000',
        },
    },
});

const TextContainer = ({ componentName }: { componentName: string }) => {
    const { Text } = useComponents();
    const componentStyles = UseComponentStyles(componentName, {});

    return (
        <Text>
            {componentStyles}Theme: {JSON.stringify(componentTheme, null, 4)}
        </Text>
    );
};

export const Example = ({ componentName }: Props) => {
    return (
        <ProvideTheme theme={theme}>
            <TextContainer componentName={componentName} />
        </ProvideTheme>
    );
};
`;

export default withDocsWrapper(DocsPage);
