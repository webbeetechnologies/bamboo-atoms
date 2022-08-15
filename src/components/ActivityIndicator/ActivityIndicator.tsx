import React, { memo, forwardRef } from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { IActivityIndicatorProps } from './types';

const ActivityIndicator = (props: IActivityIndicatorProps, ref: any) => {
    return <NativeActivityIndicator ref={ref} {...props} />;
};

export default memo(forwardRef(ActivityIndicator));
