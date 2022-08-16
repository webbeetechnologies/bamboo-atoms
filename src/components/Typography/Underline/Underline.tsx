import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IUnderlineProps } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const UnderlineDefault = textFactory('Underline', { textDecorationLine: 'underline' });

const UnderlineComponent: FC<IUnderlineProps> = props => {
    return <ConsumeComponents>{({ Underline }) => <Underline {...props} />}</ConsumeComponents>;
};

export default UnderlineComponent;
