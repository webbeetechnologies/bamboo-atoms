import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Headline } from 'react-native-paper';
import NestedText from './NestedText';
import TopLevelContext from './TopLevelContext';
import TopLevelStyles from './TopLevelStyles';
import { TobisGreatTest } from './TobisGreatTest';

const style = StyleSheet.create({
    wrap: { gap: 15, padding: 15 } as any,
    cardTitle: {
        marginHorizontal: -2,
        marginTop: -2,
        marginBottom: 16,
        backgroundColor: '#d5d5d5',
    },
});

const CardHeader: typeof Headline = props => {
    return <Card.Title style={style.cardTitle} title={<Headline {...props} />} />;
};

export default () => {
    return (
        <View style={style.wrap}>
            <Card>
                <CardHeader children="Nested Text" />
                <Card.Content>
                    <NestedText />
                </Card.Content>
            </Card>

            <Card>
                <CardHeader children="Top Level Components" />
                <Card.Content>
                    <TopLevelContext />
                </Card.Content>
            </Card>

            <Card>
                <CardHeader children="Top Level Styles" />
                <Card.Content>
                    <TopLevelStyles />
                </Card.Content>
            </Card>

            <Card>
                <CardHeader children="Tobis great test" />
                <TobisGreatTest />
            </Card>
        </View>
    );
};
