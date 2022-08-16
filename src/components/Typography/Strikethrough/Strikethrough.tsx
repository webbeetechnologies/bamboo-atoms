import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IStrikethroughProps } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const StrikethroughDefault = textFactory('Strikethrough', {
    textDecorationLine: 'line-through',
});

const StrikethroughComponent: FC<IStrikethroughProps> = props => {
    return (
        <ConsumeComponents>{({ Strikethrough }) => <Strikethrough {...props} />}</ConsumeComponents>
    );
};

export default StrikethroughComponent;
