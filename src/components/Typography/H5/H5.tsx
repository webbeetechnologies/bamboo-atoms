import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IH5Props } from './types';

const H5 = (props: IH5Props, ref: any) => {
    return <Typography ref={ref} h5 {...props} />;
};

export default memo(forwardRef(H5));
