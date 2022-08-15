import React, { FC, forwardRef } from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { IActivityIndicatorProps } from './types';
import { useComponent } from '../../core/ComponentsProvider';

export const ActivityIndicatorDefault = forwardRef((props: IActivityIndicatorProps, ref: any) => {
    return <NativeActivityIndicator ref={ref} {...props} />;
});

const ActivityIndicator: FC<IActivityIndicatorProps> = () => {
    return useComponent('ActivityIndicator'); // we can also use <ConsumeComponent /> approach here
};

export default ActivityIndicator;
