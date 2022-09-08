import React from 'react';
import { ImageProps, useComponents } from 'bamboo-shoots';

export type Props = ImageProps & {};

export const Example = (props: Props) => {
    const { Image } = useComponents();

    return <Image style={{ width: 50, height: 50 }} {...props} />;
};
