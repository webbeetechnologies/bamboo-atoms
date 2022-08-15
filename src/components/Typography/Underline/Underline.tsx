import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IUnderlineProps } from './types';

const Underline = (props: IUnderlineProps, ref: any) => {
    return <Typography ref={ref} underline {...props} />;
};

export default memo(forwardRef(Underline));
