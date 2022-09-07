import React from 'react';
import { ActivityIndicatorProps, useComponents } from 'bamboo-shoots';

export type Props = ActivityIndicatorProps & {};

export const Example = (props: Props) => {
    const { ActivityIndicator } = useComponents();

    return <ActivityIndicator {...props} />;
};
