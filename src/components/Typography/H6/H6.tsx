import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH6Props } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const H6Default = textFactory('H6', { fontSize: 10.72, fontWeight: 'bold' });

const H6: FC<IH6Props> = () => {
    return useComponent('H6');
};

export default H6;
