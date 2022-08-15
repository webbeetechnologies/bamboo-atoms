import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { ITextProps } from './types';

const Text = (props: ITextProps, ref: any) => {
    return <Typography ref={ref} {...props} />;
};

export default memo(forwardRef(Text));
