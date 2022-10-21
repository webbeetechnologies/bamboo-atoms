import { StyleSheet } from 'react-native';
import { useComponents, ViewProps } from '@webbee/bamboo-atoms';

const Row = ({ children, ...rest }: ViewProps) => {
    const { View } = useComponents();
    return (
        <View style={styles.container} {...rest}>
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
