import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IStrongProps } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const StrongDefault = textFactory('Strong', { fontWeight: 'bold' });

const Strong: FC<IStrongProps> = () => {
    return useComponent('Strong');
};

export default Strong;
