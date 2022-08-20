import React, { forwardRef, memo } from 'react';
import { Switch as NativeSwitch, StyleSheet } from 'react-native';
import { useComponentTheme, useInteractionStyles } from '../../hooks';
import type { ISwitchProps } from './types';

export const Switch = (props: ISwitchProps, ref: any) => {
    const { style, ...rest } = props;
    const themeStyles = useComponentTheme('Switch');
    const interactionStyles = useInteractionStyles('Switch', '_active');

    return (
        <NativeSwitch
            ref={ref}
            style={StyleSheet.flatten([themeStyles, interactionStyles, style])}
            {...rest}
        />
    );
};

export default memo(forwardRef(Switch));
