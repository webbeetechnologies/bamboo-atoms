import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IH2Props } from './types';

const H2 = (props: IH2Props, ref: any) => {
    return <Typography ref={ref} h2 {...props} />;
};

export default memo(forwardRef(H2));
