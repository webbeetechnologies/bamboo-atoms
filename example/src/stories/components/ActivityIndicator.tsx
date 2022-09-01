import React from 'react';
import { ActivityIndicatorProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = ActivityIndicatorProps & {};

export const Example = (props: Props) => {
    const { ActivityIndicator } = useComponents();

    return (
        <Box alignItems="center">
            <ActivityIndicator {...props} />
        </Box>
    );
};
