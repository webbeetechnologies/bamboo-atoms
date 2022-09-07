import React from 'react';
import { TextProps, useComponents } from 'bamboo-shoots';

export type Props = TextProps;

export const Example = ({ children, ...rest }: Props) => {
    const { Text } = useComponents();

    return <Text {...rest}>{children}</Text>;
};
