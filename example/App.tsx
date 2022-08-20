import React from 'react';
import { StyleSheet } from 'react-native';
import CardWithProvider from './src/components/CardWithProvider';
import { extendTheme, useComponents, ProvideTheme } from 'bamboo-shoots';
import CardWithHook from './src/components/CardWithHook';

const App = () => {
    const { View } = useComponents();
    // need to use extendTheme function to extend the theme
    const theme = extendTheme({
        config: {
            colorMode: 'dark',
        },
        componentStyles: {
            Text: {
                dark: {
                    color: 'red',
                },
                light: {
                    color: '#000',
                },
            },
        },
        primaryColor: '#007AFF',
    });

    return (
        <ProvideTheme value={{ theme }}>
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
