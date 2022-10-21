import React from 'react';
import { useComponents } from '@webbee/bamboo-atoms';
import { InjectedComponentTypes } from '../components/Theme';

const Index = () => {
    const { View, Text, Row, RoundButton, AccentButton, SymbolButton, DoubleButton, ResultText } =
        useComponents<InjectedComponentTypes>();

    return (
        <View>
            <View>
                <ResultText />
            </View>
            <Row>
                <SymbolButton children="C" />
                <SymbolButton children="+/-" />
                <SymbolButton children="%" />
                <AccentButton children="/" />
            </Row>

            {/* Number */}
            <Row>
                <RoundButton children="7" />
                <RoundButton children="8" />
                <RoundButton children="9" />
                <AccentButton children="X" />
            </Row>

            <Row>
                <RoundButton children="5" />
                <RoundButton children="6" />
                <RoundButton children="7" />
                <AccentButton children="-" />
            </Row>

            <Row>
                <RoundButton children="1" />
                <RoundButton children="2" />
                <RoundButton children="3" />
                <AccentButton children="+" />
            </Row>

            <Row>
                <RoundButton children="0" />
                <RoundButton children="00" />
                <RoundButton children="." />
                <DoubleButton children="=" />
            </Row>
        </View>
    );
};

export default Index;
