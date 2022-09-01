import React from 'react';
import { FlexAlignType, StyleSheet, View, ViewProps } from 'react-native';

interface BoxProps extends ViewProps {
    alignItems?: FlexAlignType;
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
}

const Box = ({ children, style, ...rest }: BoxProps) => {
    return <View style={StyleSheet.flatten([{ ...rest }, style])}>{children}</View>;
};

export default Box;
