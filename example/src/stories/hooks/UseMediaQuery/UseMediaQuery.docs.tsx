import React from 'react';
import { useComponents } from 'bamboo-shoots';
import { Source, ArgsTable } from '@storybook/addon-docs';
import { InjectedComponentTypes, withDocsWrapper } from '../../common';

const DocsPage = () => {
    const { View, H1, H3, Text, Code } = useComponents<InjectedComponentTypes>();

    return (
        <View>
            <H1>useMediaQuery Hook</H1>
            <Text>
                The <Code>query</Code> object accepts 4 optional properties
            </Text>
            <ArgsTable />

            <H3>Example Usage</H3>
            <Source language="tsx" code={firstCodeBlock} />
        </View>
    );
};

const firstCodeBlock = `
import { useComponents, useMediaQuery } from '@webbee/bamboo-atoms';

export const Example = () => {
    const { Text } = useComponents();
    const isSmallScreenAndOnPortraitMode = useMediaQuery({
        maxWidth: 400,
        orientation: 'portrait',
    });

    return (
        <Text>
            Is the screen a small screen and on portrait mode? -
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>{query ? 'true' : 'false'}</Text>
        </Text>
    );
};
`;

export default withDocsWrapper(DocsPage);
