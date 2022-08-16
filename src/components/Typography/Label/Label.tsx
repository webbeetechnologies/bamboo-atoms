import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { ILabelProps } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const LabelDefault = textFactory('Label', {});

const LabelComponent: FC<ILabelProps> = props => {
    return <ConsumeComponents>{({ Label }) => <Label {...props} />}</ConsumeComponents>;
};

export default LabelComponent;
