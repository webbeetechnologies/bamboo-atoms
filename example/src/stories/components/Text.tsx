import React from 'react';
import { TextProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = TextProps;

export const Example = ({ children, ...rest }: Props) => {
    const { Text } = useComponents();

    return (
        <Box alignItems="center">
            <Text {...rest}>{children}</Text>
        </Box>
    );
};
