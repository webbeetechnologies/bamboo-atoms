import React from 'react';
import { useComponents } from 'bamboo-atoms';
import { Source } from '@storybook/addon-docs';
import { InjectedComponentTypes, withDocsWrapper } from '../../common';

const DocsPage = () => {
    const { View, H1, H3, Text, Code } = useComponents<InjectedComponentTypes>();

    return (
        <View>
            <H1>useComponentStyles Hook</H1>
            <Text>
                We can get the theme styles of a default component using{' '}
                <Code>UseComponentStyles</Code> hook.
                {'\n'}
                It accept an argument called <Code>componentName</Code> in which we can enter the
                name of the component that we want to get the styles of.
            </Text>
            <Text>
                Under the hood, <Code>useComponentStyles</Code> leverages the default{' '}
                <Code>extractTheme</Code> function. And if the user replace it with their own
                implementation of <Code>extractTheme</Code> function and returns the theme styles
                for the default components accordingly.
            </Text>
            <Text>
                <Code>useComponentStyles</Code> hook is used inside the default components to fetch
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

export type Props = {
    componentName: string;
};

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
    const componentStyles = useComponentStyles(componentName, {});

    return (
        <Text>
            {componentName}Theme: {JSON.stringify(componentStyles, null, 4)}
        </Text>
    );
};

export const App = ({ componentName }: Props) => {
    return (
        <ProvideTheme theme={theme}>
            <TextContainer componentName={componentName} />
        </ProvideTheme>
    );
};
`;

export default withDocsWrapper(DocsPage);
