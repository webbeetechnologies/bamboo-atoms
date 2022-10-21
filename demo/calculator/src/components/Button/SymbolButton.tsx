import { useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps, RoundButton } from '.';

const SymbolButton = ({ type = 'default', children, ...props }: CustomButtonProps) => {
    const symbolButton = useComponentStyles('SymbolButton');

    // custom logic
    return (
        <RoundButton {...props} style={symbolButton}>
            {children as any}
        </RoundButton>
    );
};

export default SymbolButton;
