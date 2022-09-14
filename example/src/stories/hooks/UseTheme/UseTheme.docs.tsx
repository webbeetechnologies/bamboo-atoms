import React from 'react';
import { useComponents } from 'bamboo-shoots';
import { Source } from '@storybook/addon-docs';
import { InjectedComponentTypes, withDocsWrapper } from '../../common';

const DocsPage = () => {
    const { View, H1, H3, Text, Code } = useComponents<InjectedComponentTypes>();

    return (
        <View>
            <H1>useTheme Hook</H1>
            <Text>
                <Code>useTheme</Code> hook is a simple hook that return the entire theme object that
                the provider provides.
            </Text>

            <H3>Example Usage</H3>
            <Source language="tsx" code={firstCodeBlock} />
        </View>
    );
};

const firstCodeBlock = `
import {
    useComponents,
    ProvideTheme,
    extendTheme,
    useTheme,
    ITheme,
    IComponentStyles,
    IStyleWithTheme,
} from '@webbee/bamboo-atoms';

export interface CustomTheme extends ITheme {
     primaryColor: string;
     componentStyles: IComponentStyles & {
         CustomButton: IStyleWithTheme<ViewStyle>;
     };
 }

 const theme = extendTheme({
     Text: {
         fontWeight: 'bold',

         dark: {
             color: '#fff',
         },
         light: {
             color: '#1977f2',
         },
     },
     primaryColor: '#007AFF',
 });

 export const TextContainer = () => {
     const providedTheme = useTheme<CustomTheme>();
     const { Text } = useComponents();

     return <Text>{JSON.stringify(providedTheme, null, 4)}</Text>;
 };

 export const Example = () => {
     return (
         <ProvideTheme theme={theme}>
             <TextContainer />
         </ProvideTheme>
     );
 };
`;

export default withDocsWrapper(DocsPage);
