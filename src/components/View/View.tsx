import React, { forwardRef, memo } from 'react';
import { View as NativeView } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
import type { IViewProps } from './types';

const View = (props: IViewProps, ref: any) => {
    const { style, ...rest } = props;
    const styles = useComponentStyles('View', style);

    return <NativeView ref={ref} style={styles} {...rest} />;
};

export default memo(forwardRef(View));
