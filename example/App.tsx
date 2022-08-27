import React from 'react';
import { StyleSheet } from 'react-native';
import CardWithProvider from './src/components/CardWithProvider';
import { extendTheme, useComponents, ProvideTheme, ExtractStylesFuncArgs } from 'bamboo-shoots';
import { Button } from 'bamboo-shoots/styles';
import CardWithHook from './src/components/CardWithHook';

const App = () => {
    const { View } = useComponents();

    // eslint-disable-next-line no-console
    console.log('ButtonStyles: ', Button);

    return (
        <ProvideTheme value={{ theme, extractStyles: extractStyles }}>
            <View style={styles.container}>
                <CardWithProvider />
                <CardWithHook />
            </View>
        </ProvideTheme>
    );
};

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
        CustomButton: {
            marginBottom: 10,
            dark: {
                backgroundColor: 'blue',
            },
            light: {
                backgroundColor: 'red',
            },
        },
    },
    primaryColor: '#007AFF',
});

// extractStyles func gives as object with 4 properties as an argument
const extractStyles = ({ componentName, defaultStyles }: ExtractStylesFuncArgs) => {
    return componentName === 'Text' ? { backgroundColor: 'red' } : defaultStyles; // making the background of the text only red
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
