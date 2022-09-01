import React from 'react';
import { useComponents, ViewProps } from 'bamboo-shoots';
import Box from '../../components/Box';
import { StyleSheet } from 'react-native';

export type Props = ViewProps & {};

export const Example = ({ style, ...rest }: Props) => {
    const { View } = useComponents();

    return (
        <Box alignItems="center">
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
                Box
            </View>
        </Box>
    );
};
