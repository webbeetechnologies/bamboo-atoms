import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IH4Props } from './types';

const H4 = (props: IH4Props, ref: any) => {
    return <Typography ref={ref} h4 {...props} />;
};

export default memo(forwardRef(H4));
