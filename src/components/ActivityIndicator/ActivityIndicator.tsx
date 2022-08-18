import React, { forwardRef, memo } from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { IActivityIndicatorProps } from './types';

export const ActivityIndicator = (props: IActivityIndicatorProps, ref: any) => {
    return <NativeActivityIndicator ref={ref} {...props} />;
};

export default memo(forwardRef(ActivityIndicator));
