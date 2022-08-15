import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { ILabelProps } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const LabelDefault = textFactory('Label', {});

const Label: FC<ILabelProps> = () => {
    return useComponent('Label');
};

export default Label;
