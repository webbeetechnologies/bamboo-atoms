import React, { ComponentType } from 'react';
import { Platform, StatusBar } from 'react-native';
import {
    extendTheme,
    ProvideComponents,
    ProvideTheme,
    TextProps,
    ViewProps,
} from '@webbee/bamboo-atoms';
import {
    CustomButtonProps,
    RoundButton,
    AccentButton,
    SymbolButton,
    DoubleButton,
} from '../Button';
import Row from '../Row';
import ResultText from '../ResultText';

const customTheme = extendTheme({
    Text: {
        lineHeight: 26,
        color: '#fff',
        fontSize: 24,
    },
    CustomText: {
        lineHeight: 24,
        marginHorizontal: 2,
        paddingVertical: 3,
        paddingHorizontal: 5,
        whiteSpace: 'nowrap',
        borderRadius: 3,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        color: 'rgba(51,51,51,0.9)',
        backgroundColor: '#F8F8F8',
    },
    RoundButton: {
        backgroundColor: '#333333',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        dark: {
            borderColor: '#fff',
            borderWidth: 1,
            color: '#fff',
        },
        light: {
            borderColor: '#333333',
            borderWidth: 1,
            backgroundColor: '#fff',
        },
    },
    TextSecondary: {
        color: '#060606',
    },
    DoubleButton: {
        backgroundColor: 'green',
    },
    SymbolButton: {
        backgroundColor: '#a6a6a6',
    },
    AccentButton: {
        dark: {
            borderColor: '#ffc107',
            borderWidth: 1,
            color: '#fff',
        },
        light: {
            borderColor: '#fff',
            borderWidth: 1,
            backgroundColor: '#ffc107',
        },
    },
    ResultText: {
        color: '#202020',
        fontSize: 42,
        textAlign: 'right',
        marginRight: 20,
        marginBottom: 10,
        dark: {
            color: '#fff',
        },
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        dark: {
            backgroundColor: '#202020',
        },
        light: {
            background: '#fff',
        },
    },
    colorMode: 'dark',
});

export interface InjectedComponentTypes {
    Row: ComponentType<ViewProps>;
    ResultText: ComponentType<TextProps>;
    RoundButton: ComponentType<CustomButtonProps>;
    AccentButton: ComponentType<CustomButtonProps>;
    SymbolButton: ComponentType<CustomButtonProps>;
    DoubleButton: ComponentType<CustomButtonProps>;
}

const components = { Row, RoundButton, AccentButton, SymbolButton, DoubleButton, ResultText };

export const calcWrapper = (Component: () => JSX.Element) => (props: typeof Component) => {
    return (
        <ProvideTheme theme={customTheme}>
            <ProvideComponents components={components}>
                <Component {...props} />
            </ProvideComponents>
        </ProvideTheme>
    );
};
