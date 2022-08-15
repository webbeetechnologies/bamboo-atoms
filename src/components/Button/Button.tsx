import React, { forwardRef, FC } from 'react';
import { Pressable } from 'react-native';
import type { IButtonProps } from './types';
import { useComponent } from '../../core/ComponentsProvider';

export const ButtonDefault = forwardRef((props: IButtonProps, ref: any) => {
    return <Pressable ref={ref} {...props} />;
});

const Button: FC<IButtonProps> = () => {
    return useComponent('Button');
};

export default Button;
