import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { ILabelProps } from './types';

const Label = (props: ILabelProps, ref: any) => {
    return <Typography ref={ref} label {...props} />;
};

export default memo(forwardRef(Label));
