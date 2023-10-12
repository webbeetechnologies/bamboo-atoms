import React from 'react';
import { PressableProps, useComponents } from 'bamboo-atoms';

export type Props = PressableProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Pressable } = useComponents();

    return <Pressable {...rest}>{children}</Pressable>;
};
