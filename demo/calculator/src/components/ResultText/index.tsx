import { useComponents, useComponentStyles, ViewProps } from '@webbee/bamboo-atoms';
import React from 'react';

const Index = ({ style }: ViewProps) => {
    const { Text } = useComponents();
    const { ResultText } = useComponentStyles('ResultText', style);

    return <Text style={ResultText}>{parseFloat('0').toLocaleString()}</Text>;
};

export default Index;
