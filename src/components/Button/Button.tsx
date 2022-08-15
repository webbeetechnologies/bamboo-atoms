import React, { memo, forwardRef } from 'react';
import { Pressable } from 'react-native';
import type { IButtonProps } from './types';

const Button = (props: IButtonProps, ref: any) => {
    return <Pressable ref={ref} {...props} />;
};

export default memo(forwardRef(Button));
