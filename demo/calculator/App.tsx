import React from 'react';
import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import { calcWrapper } from './src/components/Theme';
import Views from './src/views';

const App = () => {
    const { View } = useComponents();
    const mainContainer = useComponentStyles('MainContainer');

    return (
        <View style={mainContainer}>
            <Views />
        </View>
    );
};

export default calcWrapper(App);
