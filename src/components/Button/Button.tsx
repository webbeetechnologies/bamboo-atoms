import React, { forwardRef, memo } from 'react';
import { Button as NativeButton } from 'react-native';
import type { IButtonProps } from './types';

export const Button = (props: IButtonProps, ref: any) => {
    return <NativeButton ref={ref} {...props} />;
};

export default memo(forwardRef(Button));
