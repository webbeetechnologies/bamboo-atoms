import React, { forwardRef, memo } from 'react';
import { Switch as NativeSwitch } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
import type { ISwitchProps } from './types';

export const Switch = (props: ISwitchProps, ref: any) => {
    const { style, ...rest } = props;
    const styles = useComponentStyles('Switch', style);

    return <NativeSwitch ref={ref} style={styles} {...rest} />;
};

export default memo(forwardRef(Switch));
