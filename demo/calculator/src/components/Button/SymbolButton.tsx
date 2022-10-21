import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps } from '.';
import { InjectedComponentTypes } from '../Theme';

const SymbolButton = ({ children, style, ...props }: CustomButtonProps) => {
    const symbolButton = useComponentStyles('SymbolButton', style);
    const { Text, RoundButton } = useComponents<InjectedComponentTypes>();

    // custom logic
    return (
        <RoundButton {...props} style={symbolButton}>
            <Text>{children as any}</Text>
        </RoundButton>
    );
};

export default SymbolButton;
