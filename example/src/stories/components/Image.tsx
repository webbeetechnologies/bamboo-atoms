import React from 'react';
import { ImageProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = ImageProps & {};

export const Example = (props: Props) => {
    const { Image } = useComponents();

    return (
        <Box alignItems="center">
            <Image style={{ width: 50, height: 50 }} {...props} />
        </Box>
    );
};
