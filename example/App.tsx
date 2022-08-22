import React from 'react';
import { StyleSheet } from 'react-native';
import CardWithProvider from './src/components/CardWithProvider';
import { extendTheme, useComponents, ProvideTheme, ExtractStylesFuncArgs } from 'bamboo-shoots';
import CardWithHook from './src/components/CardWithHook';

const App = () => {
    const { View } = useComponents();
    // need to use extendTheme function to extend the theme
    const theme = extendTheme({
        config: {
            colorMode: 'dark',
        },
        componentStyles: {
            Heading: {
                width: 300,
                marginBottom: 50,

                dark: {
                    backgroundColor: '#fff',
                },
                light: {
                    backgroundColor: '#000',
                },
            },
        },
        primaryColor: '#007AFF',
    });

    // extractStyles func gives as object with 4 properties as an argument
    const extractStyles = ({ componentName, defaultStyles }: ExtractStylesFuncArgs) => {
        return componentName === 'Text' ? { backgroundColor: 'red' } : defaultStyles; // making the background of the text only red
    };

    return (
        <ProvideTheme value={{ theme, extractStyles: extractStyles }}>
            <View style={styles.container}>
                <CardWithProvider />
                <CardWithHook />
            </View>
        </ProvideTheme>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
