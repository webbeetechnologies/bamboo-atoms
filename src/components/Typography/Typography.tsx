import React, { forwardRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import type { ITypographyProps } from './types';

const Typography = (props: ITypographyProps, ref: any) => {
    const {
        strong,
        heading,
        italic,
        strikethrough,
        label,
        underline,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        style,
        ...rest
    } = props;

    return (
        <Text
            ref={ref}
            style={StyleSheet.flatten([
                styles.text,
                StyleSheet.flatten([
                    (strong || heading || h1 || h2 || h3 || h4 || h5 || h6) && styles.bold,
                    heading && styles.heading,
                    italic && styles.italic,
                    strikethrough && styles.strikethrough,
                    underline && styles.underline,
                    label && styles.label,
                    h1 && styles.h1,
                    h2 && styles.h2,
                    h3 && styles.h3,
                    h4 && styles.h4,
                    h5 && styles.h5,
                    h6 && styles.h6,
                ]),
                style,
            ])}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    },
    heading: {
        fontSize: 32,
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
    strikethrough: {
        textDecorationLine: 'line-through',
    },
    underline: {
        textDecorationLine: 'underline',
    },
    label: {},
    h1: {
        fontSize: 32,
    },
    h2: {
        fontSize: 24,
    },
    h3: {
        fontSize: 18.72,
    },
    h4: {
        fontSize: 16,
    },
    h5: {
        fontSize: 13.28,
    },
    h6: {
        fontSize: 10.72,
    },
});

export default forwardRef(Typography);
