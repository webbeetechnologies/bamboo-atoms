import React from 'react';
import { LabelProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = LabelProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Label } = useComponents();

    return (
        <Box alignItems="center">
            <Label {...rest}>{text}</Label>
        </Box>
    );
};
