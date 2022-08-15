import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH2Props } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const H2Default = textFactory('H2', { fontSize: 24, fontWeight: 'bold' });

const H2: FC<IH2Props> = () => {
    return useComponent('H2');
};

export default H2;
