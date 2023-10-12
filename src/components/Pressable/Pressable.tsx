import React, { forwardRef, memo } from 'react';
import { Pressable as NativePressable } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
import type { IPressableProps } from './types';

export const Pressable = (props: IPressableProps, ref: any) => {
    const { style, ...rest } = props;
    const styles = useComponentStyles('Pressable', style);

    return <NativePressable ref={ref} style={styles} {...rest} />;
};

export default memo(forwardRef(Pressable));
