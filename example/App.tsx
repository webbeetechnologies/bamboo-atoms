import React from 'react';
import { StyleSheet } from 'react-native';
import CardWithProvider from './src/components/CardWithProvider';
import { useComponents } from 'bamboo-shoots';
import CardWithHook from './src/components/CardWithHook';

const App = () => {
    const { View } = useComponents();

    return (
        <View style={styles.container}>
            <CardWithProvider />
            <CardWithHook />
        </View>
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
