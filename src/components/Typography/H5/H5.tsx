import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH5Props } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const H5Default = textFactory('H5', { fontSize: 13.28, fontWeight: 'bold' });

const H5: FC<IH5Props> = () => {
    return useComponent('H5');
};

export default H5;
