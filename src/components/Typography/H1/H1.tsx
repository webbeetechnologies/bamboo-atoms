import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IH1Props } from './types';

const H1 = (props: IH1Props, ref: any) => {
    return <Typography ref={ref} h1 {...props} />;
};

export default memo(forwardRef(H1));
