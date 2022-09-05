import React from 'react';
import { StrikethroughProps, useComponents } from 'bamboo-shoots';

export type Props = StrikethroughProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Strikethrough } = useComponents();

    return <Strikethrough {...rest}>{text}</Strikethrough>;
};
