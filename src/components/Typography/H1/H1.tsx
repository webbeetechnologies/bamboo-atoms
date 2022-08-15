import type { FC } from 'react';
import { useComponent } from '../../../core/ComponentsProvider';
import { textFactory } from '../Typography';
import type { IH1Props } from './types';

export const H1Default = textFactory('H1', { fontSize: 32, fontWeight: 'bold' });

export const H1: FC<IH1Props> = () => {
    return useComponent('H1');
};

export default H1;
