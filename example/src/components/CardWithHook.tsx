import React from 'react';
import { StyleSheet } from 'react-native';
import { useComponents } from 'bamboo-shoots';

const CardWithHook = () => {
    const { Heading, View, Strikethrough, Strong } = useComponents();

    return (
        <View style={styles.card}>
            <Heading style={styles.heading}>With Hooks</Heading>
            <Strikethrough>Strikethrough</Strikethrough>
            <Strong>Strong</Strong>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        margin: 10,
    },
    heading: {
        marginBottom: 10,
    },
});

export default CardWithHook;
