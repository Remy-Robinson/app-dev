import {StyleSheet} from  'react-native';
import {Image} from 'expo-image';
import {styles} from '../app/styles'; // Assuming styles are defined in a separate fil


type Props = {
    imgSource: string;
};

export default function ImageViewer({ imgSource }: Props) {
    return (
            <Image source={imgSource} style={styles.image} />
    );
}

export {ImageViewer};