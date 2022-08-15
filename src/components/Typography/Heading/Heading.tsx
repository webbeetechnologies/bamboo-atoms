import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IHeadingProps } from './types';

const Heading = (props: IHeadingProps, ref: any) => {
    return <Typography ref={ref} heading {...props} />;
};

export default memo(forwardRef(Heading));
