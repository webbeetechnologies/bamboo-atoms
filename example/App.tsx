import React from 'react';
import {
    Button as NativeButton,
    ActivityIndicator as NativeActivityIndicator,
    Text as NativeText,
    View as NativeView,
    StyleSheet,
} from 'react-native';
import { ConsumeComponents, ProvideComponents, useComponents } from 'bamboo-shoots';

const App = () => {
    const { Strikethrough } = useComponents();

    return (
        <NativeView style={styles.container}>
            <ProvideComponents
                components={{
                    Button: NativeButton as any,
                    Underline: NativeText as any,
                    Strong: NativeText as any,
                    ActivityIndicator: NativeActivityIndicator as any,
                }}>
                <ConsumeComponents>
                    {({ View, Button, Underline, Strong }) => (
                        <View style={{ padding: 10, backgroundColor: '#f5f5f5', margin: 10 }}>
                            <Button title="Okay" />
                            <Button title="Delete" />
                            <Button title="Cancel" />
                            <Underline>Underline</Underline>
                            <NativeText style={{ color: 'red' }}>
                                <Strong>Strong (inherited styles)</Strong>
                            </NativeText>
                            <Strikethrough>Strikethrough</Strikethrough>
                        </View>
                    )}
                </ConsumeComponents>
            </ProvideComponents>
        </NativeView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
