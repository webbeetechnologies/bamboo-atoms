import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IUnderlineProps } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const UnderlineDefault = textFactory('Underline', { textDecorationLine: 'underline' });

const Underline: FC<IUnderlineProps> = () => {
    return useComponent('Underline');
};

export default Underline;
