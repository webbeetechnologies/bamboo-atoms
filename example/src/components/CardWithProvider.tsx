import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ConsumeComponents, extractComponents, ProvideComponents } from 'bamboo-shoots';
import {
    ActivityIndicator as PaperActivityIndicator,
    Button as PaperButton,
    Text as PaperText,
} from 'react-native-paper';

// only need to define the types of injected components and custom components
interface InjectedComponentTypes {
    ActivityIndicator: typeof PaperActivityIndicator;
    CustomButton: typeof PaperButton; // custom component
}

class CardWithProvider extends Component {
    // recommended to use extractComponents func to extract the components from the context and insert injected component types as generic
    renderComponents = extractComponents<InjectedComponentTypes>(
        ({ ActivityIndicator, CustomButton, View, Heading, Strong, Text }) => (
            <View style={styles.card}>
                <CustomButton mode="outlined">Outlined</CustomButton>
                <Heading style={styles.heading}>With Provider</Heading>
                <ActivityIndicator />
                <Text>
                    <Strong>Strong (inherited styles)</Strong>
                </Text>
            </View>
        ),
    );

    render() {
        return (
            <ProvideComponents
                components={{
                    CustomButton: PaperButton,
                    Underline: PaperText,
                    ActivityIndicator: PaperActivityIndicator,
                }}>
                <ConsumeComponents>{this.renderComponents}</ConsumeComponents>
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
