import React from 'react';
import { TouchableWithoutFeedbackProps, useComponents } from 'bamboo-atoms';

export type Props = TouchableWithoutFeedbackProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { TouchableWithoutFeedback } = useComponents();

    return <TouchableWithoutFeedback {...rest}>{children}</TouchableWithoutFeedback>;
};
