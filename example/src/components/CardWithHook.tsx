import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton, Text as PaperText } from 'react-native-paper';
import {
    ProvideComponents,
    useComponents,
    useMediaQuery,
    useComponentStyles,
    useTheme,
} from 'bamboo-atoms';
import type { CustomTheme } from '../types';

interface InjectedComponentTypes {
    Button: typeof PaperButton;
    CustomText: typeof PaperText; // custom component
}

const CardWithHooksContainer = () => (
    <ProvideComponents components={{ Button: PaperButton, CustomText: PaperText }}>
        <CardWithHook />
    </ProvideComponents>
);

const CardWithHook = () => {
    const { Button, CustomText, Heading, View, Strong } = useComponents<InjectedComponentTypes>(); // extendable // only need to define the property the user wants to replace
    const { primaryColor } = useTheme<CustomTheme>();

    const isSmallScreenAndOnPortraitMode = useMediaQuery({
        maxWidth: 400,
        orientation: 'portrait',
    });

    const customButtonStyles = useComponentStyles('CustomButton');

    // eslint-disable-next-line no-console
    console.log(isSmallScreenAndOnPortraitMode, customButtonStyles, primaryColor);

    return (
        <View style={styles.card}>
            <Button mode="contained">Test</Button>
            <Heading style={styles.heading}>With Hooks</Heading>
            <Strong>Strong</Strong>
            <CustomText>Test</CustomText>
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
