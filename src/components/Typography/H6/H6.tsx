import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IH6Props } from './types';

const H6 = (props: IH6Props, ref: any) => {
    return <Typography ref={ref} h6 {...props} />;
};

export default memo(forwardRef(H6));
