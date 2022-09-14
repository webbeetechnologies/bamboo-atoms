import React from 'react';
import { useComponents } from 'bamboo-shoots';
import { Source } from '@storybook/addon-docs';
import { InjectedComponentTypes, withDocsWrapper } from '../../common';

const DocsPage = () => {
    const { View, H1, H3, Text, Code } = useComponents<InjectedComponentTypes>();

    return (
        <View>
            <H1>useComponents Hook</H1>
            <Text>
                <Code>useComponents</Code> hook can be use to consume/import the default components
                or the injected component. It return an object that has all the components available
                inside.
            </Text>

            <H3>Example Usage</H3>
            <Text>
                We can modify the types of default components if they're injected, by using a
                generic. The generic will automatically extend the default components' interface,
                so, we only need to add the types of the component we want to modify or replace.
            </Text>

            <Source language="tsx" code={firstCodeBlock} />
        </View>
    );
};

const firstCodeBlock = `
import { useComponents } from '@webbee/bamboo-atoms';

export const Example = (_props: Props) => {
    const { Text, Button } = useComponents();

    return (
        <>
            <Text>Text Component</Text>
            <Button>
                <Text>Button Component</Text>
            </Button>
        </>
    );
};
`;

export default withDocsWrapper(DocsPage);
