import React, { forwardRef, memo } from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
import type { IActivityIndicatorProps } from './types';

export const ActivityIndicator = (props: IActivityIndicatorProps, ref: any) => {
    const { style, ...rest } = props;
    const styles = useComponentStyles('ActivityIndicator', style);

    return <NativeActivityIndicator ref={ref} style={styles} {...rest} />;
};

export default memo(forwardRef(ActivityIndicator));
