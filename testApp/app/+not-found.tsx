import {View} from "react-native";
import { Link, Stack} from "expo-router";
import {styles} from "./(tabs)/styles"; // Assuming styles are defined in a separate file

export default function NotFound(){
    return(
    <>
        <Stack.Screen options ={{title: "Not Found"}} />
        <view style={styles.container}>
            <Link href={"/"} style={styles.button}>
             Go to Home
            </Link>
        </view>
    </>
    );
}