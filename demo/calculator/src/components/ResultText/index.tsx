import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import React from 'react';

const Index = () => {
    const { Text } = useComponents();
    const { ResultText } = useComponentStyles('ResultText');

    return <Text style={ResultText}>{parseFloat('0').toLocaleString()}</Text>;
};

export default Index;
