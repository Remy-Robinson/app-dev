import {styles} from "../app/styles";
import {Text, View, Pressable} from "react-native";

type Props = {
    label: string;
}

export default function Button({ label }: Props) {
        return (
            <View>
                <Pressable
                    style={styles.button}
                    onPress = {() => alert("Button pressed")}
                >
                    <Text style={styles.buttonText}>{label}</Text>
                </Pressable>
            </View>
        );
}

export {Button};