import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IHeadingProps } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const HeadingDefault = textFactory('Heading', { fontSize: 32, fontWeight: 'bold' });

const Heading: FC<IHeadingProps> = () => {
    return useComponent('Heading');
};

export default Heading;
