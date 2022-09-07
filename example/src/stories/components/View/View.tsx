import React from 'react';
import { useComponents, ViewProps } from 'bamboo-shoots';
import { StyleSheet } from 'react-native';

export type Props = ViewProps & {};

export const Example = ({ style, ...rest }: Props) => {
    const { View, Text } = useComponents();

    return (
        <View
            style={StyleSheet.flatten([
                {
                    width: 100,
                    height: 100,
                    backgroundColor: '#f5f5f5',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                style,
            ])}
            {...rest}>
            <Text>Box</Text>
        </View>
    );
};
