import React, { forwardRef, memo } from 'react';
import { TouchableWithoutFeedback as NativeTouchableWithoutFeedback } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
import type { ITouchableWithoutFeedbackProps } from './types';

export const TouchableWithoutFeedback = (props: ITouchableWithoutFeedbackProps, ref: any) => {
    const { style, ...rest } = props;
    const styles = useComponentStyles('TouchableWithoutFeedback', style);

    return <NativeTouchableWithoutFeedback ref={ref} style={styles} {...rest} />;
};

export default memo(forwardRef(TouchableWithoutFeedback));
