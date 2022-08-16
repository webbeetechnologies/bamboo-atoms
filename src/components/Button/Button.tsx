import React, { forwardRef, FC } from 'react';
import { Pressable } from 'react-native';
import type { IButtonProps } from './types';
import { ConsumeComponents } from '../../core/ComponentsProvider';

export const ButtonDefault = forwardRef((props: IButtonProps, ref: any) => {
    return <Pressable ref={ref} {...props} />;
});

const ButtonComponent: FC<IButtonProps> = props => {
    return <ConsumeComponents>{({ Button }) => <Button {...props} />}</ConsumeComponents>;
};

export default ButtonComponent;
