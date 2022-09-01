import React from 'react';
import { StrikethroughProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = StrikethroughProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Strikethrough } = useComponents();

    return (
        <Box alignItems="center">
            <Strikethrough {...rest}>{text}</Strikethrough>
        </Box>
    );
};
