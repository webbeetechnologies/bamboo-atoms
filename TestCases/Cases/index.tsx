import { View } from "react-native";
import { Card, Divider } from "react-native-paper";
import TopLevelContext from "./TopLevelContext";
import TopLevelStyles from "./TopLevelStyles";

export default () => {
    return (
        <View style={{ gap: 15, padding: 15 } as any}>
            <Card>
                <Card.Content>
                <TopLevelContext />
                </Card.Content>
            </Card>
            <Card>
            <Card.Content>

            <TopLevelStyles />
            </Card.Content>

            </Card>

        </View>
    )
}