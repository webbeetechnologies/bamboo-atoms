import {extendTheme, ProvideComponents, ProvideTheme, TextProps, useComponents, useComponentTheme} from "bamboo-shoots";
import {StyleSheet, Text as NativeText} from "react-native";
import React, {ReactNode} from "react";

export const textArgTypes = {
    allowFontScaling: { control: 'boolean' },
    ellipsizeMode: { control: 'select', options: ['head', 'middle', 'tail', 'clip'] },
    lineBreakMode: { control: 'select', options: ['head', 'middle', 'tail', 'clip'] },
    numberOfLines: { control: 'number' },
};

export const theme = extendTheme({
    H1: {
        marginTop: 20,
        marginBottom: 8,
        padding: 0,
        color: '#333333',
        fontSize: 32,
        fontWeight: '900',
    },
    Text: {
        lineHeight: 24,
        fontSize: 14,
        color: '#333333',
        marginVertical: 16,
    },
    H3: {
        marginTop: 20,
        marginBottom: 8,
        padding: 0,
        color: '#333333',
        fontSize: 20,
        fontWeight: '900',
    },
    Code: {
        lineHeight: 1,
        marginHorizontal: 2,
        paddingVertical: 3,
        paddingHorizontal: 5,
        whiteSpace: 'nowrap',
        borderRadius: 3,
        fontSize: 13,
        // border: 1px solid #EEEEEE;
        borderWidth: 1,
        borderColor: '#EEEEEE',
        color: 'rgba(51,51,51,0.9)',
        backgroundColor: '#F8F8F8',
    },
    Strong: {
        fontSize: 14,
        lineHeight: 24,
        color: '#333333',
    },
});

export interface InjectedComponentTypes {
    Code: typeof NativeText;
}

const CodeComponent = ({ style, ...rest }: TextProps) => {
    const codeTheme = useComponentTheme('Code');
    const { Text } = useComponents();

    return <Text style={StyleSheet.flatten([codeTheme, style])} {...rest} />;
};

export const DocsWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ProvideTheme theme={theme}>
        <ProvideComponents components={{ Code: CodeComponent }}>{children}</ProvideComponents>
    </ProvideTheme>
);
};

