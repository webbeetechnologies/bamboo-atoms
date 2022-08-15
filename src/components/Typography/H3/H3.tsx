import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH3Props } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const H3Default = textFactory('H3', { fontSize: 18.72, fontWeight: 'bold' });

const H3: FC<IH3Props> = () => {
    return useComponent('H3');
};

export default H3;
