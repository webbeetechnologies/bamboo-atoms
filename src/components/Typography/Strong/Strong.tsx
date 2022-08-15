import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IStrongProps } from './types';

const Strong = (props: IStrongProps, ref: any) => {
    return <Typography ref={ref} strong {...props} />;
};

export default memo(forwardRef(Strong));
