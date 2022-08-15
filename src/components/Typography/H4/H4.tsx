import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH4Props } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const H4Default = textFactory('H4', { fontSize: 16, fontWeight: 'bold' });

const H4: FC<IH4Props> = () => {
    return useComponent('H4');
};

export default H4;
