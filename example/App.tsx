import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { View, Text, Strikethrough, Strong, TextInput } from '../src/components';
import { ProvideComponents } from '../src/core/ComponentsProvider';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Strikethrough>Strikethrough</Strikethrough>
            <Strong>Strong</Strong>

            <ProvideComponents components={{ Button: Button as any }}>
                <Button title="Injected Button" />
            </ProvideComponents>

            <TextInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
