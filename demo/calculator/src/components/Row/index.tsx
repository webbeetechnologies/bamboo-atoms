import { StyleSheet } from 'react-native';
import { useComponents, ViewProps } from '@webbee/bamboo-atoms';

const Row = ({ children, style, ...rest }: ViewProps) => {
    const { View } = useComponents();
    return (
        <View style={[styles.container, style]} {...rest}>
            {children}
        </View>
    );
};

// create styles of Row
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default Row;
