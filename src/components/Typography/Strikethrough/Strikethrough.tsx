import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IStrikethroughProps } from './types';

const Strikethrough = (props: IStrikethroughProps, ref: any) => {
    return <Typography ref={ref} strikethrough {...props} />;
};

export default memo(forwardRef(Strikethrough));
