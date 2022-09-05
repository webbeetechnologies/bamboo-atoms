import { View } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

export const decorators = [
    withBackgrounds,
    Story => (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Story />
        </View>
    ),
];
export const parameters = {
    backgrounds: [
        { name: 'plain', value: 'white', default: true },
        { name: 'warm', value: 'hotpink' },
        { name: 'cool', value: 'deepskyblue' },
    ],
};
