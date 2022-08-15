import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IH3Props } from './types';

const H3 = (props: IH3Props, ref: any) => {
    return <Typography ref={ref} h3 {...props} />;
};

export default memo(forwardRef(H3));
