import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps } from '.';
import { InjectedComponentTypes } from '../Theme';

const DoubleButton = ({ children, ...props }: CustomButtonProps) => {
    const doubleButton = useComponentStyles('DoubleButton');
    const { Text, RoundButton } = useComponents<InjectedComponentTypes>();

    // custom logic
    return (
        <RoundButton {...props} style={doubleButton}>
            <Text>{children as any}</Text>
        </RoundButton>
    );
};

export default DoubleButton;
