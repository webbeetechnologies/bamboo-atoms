import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ConsumeComponents, ProvideComponents } from 'bamboo-shoots';
import {
    ActivityIndicator as PaperActivityIndicator,
    Button as PaperButton,
    Text as PaperText,
} from 'react-native-paper';

class CardWithProvider extends Component {
    render() {
        return (
            <ProvideComponents
                components={{
                    Button: PaperButton,
                    Underline: PaperText,
                    Strong: PaperText,
                    ActivityIndicator: PaperActivityIndicator,
                }}>
                <ConsumeComponents>
                    {({ ActivityIndicator, View, Heading, Underline, Strong, Text }) => (
                        <View style={styles.card}>
                            <Heading style={styles.heading}>With Provider</Heading>
                            <ActivityIndicator />
                            <Underline>Underline</Underline>
                            <Text style={{ color: 'red' }}>
                                <Strong>Strong (inherited styles)</Strong>
                            </Text>
                        </View>
                    )}
                </ConsumeComponents>
            </ProvideComponents>
        );
    }
}

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

export default CardWithProvider;
