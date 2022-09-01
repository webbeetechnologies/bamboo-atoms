import React from 'react';
import { H6Props, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = H6Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H6 } = useComponents();

    return (
        <Box alignItems="center">
            <H6 {...rest}>{text}</H6>
        </Box>
    );
};
