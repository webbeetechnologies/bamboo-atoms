import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton, Text as PaperText } from 'react-native-paper';
import { ProvideComponents, useComponents } from 'bamboo-shoots';

const CardWithHooksContainer = () => (
    <ProvideComponents components={{ Button: PaperButton, Text: PaperText }}>
        <CardWithHook />
    </ProvideComponents>
);

const CardWithHook = () => {
    const { Button, Text, Heading, View, Strikethrough, Strong } = useComponents<{
        // extendable // only need to define the property the user wants to replace
        Button: typeof PaperButton;
        Text: typeof PaperText;
    }>();

    return (
        <View style={styles.card}>
            <Button mode="contained">Test</Button>
            <Heading style={styles.heading}>With Hooks</Heading>
            <Strikethrough>Strikethrough</Strikethrough>
            <Strong>Strong</Strong>
            <Text variant="headlineLarge">Test</Text>
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

export default CardWithHooksContainer;
