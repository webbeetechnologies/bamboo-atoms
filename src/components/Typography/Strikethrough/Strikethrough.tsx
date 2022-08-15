import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IStrikethroughProps } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const StrikethroughDefault = textFactory('Strikethrough', {
    textDecorationLine: 'line-through',
});

const Strikethrough: FC<IStrikethroughProps> = () => {
    return useComponent('Strikethrough');
};

export default Strikethrough;
