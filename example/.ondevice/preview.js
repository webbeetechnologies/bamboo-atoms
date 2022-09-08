import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export const decorators = [
    Story => (
        <PaperProvider>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Story />
            </View>
        </PaperProvider>
    ),
];
export const parameters = {
    backgrounds: [
        { name: 'plain', value: 'white', default: true },
        { name: 'warm', value: 'hotpink' },
        { name: 'cool', value: 'deepskyblue' },
    ],
};
