import React, { memo, forwardRef } from 'react';
import Typography from '../Typography';
import type { IItalicProps } from './types';

const Italic = (props: IItalicProps, ref: any) => {
    return <Typography ref={ref} italic {...props} />;
};

export default memo(forwardRef(Italic));
