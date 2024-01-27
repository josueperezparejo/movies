import { Animated, Button, View } from "react-native"
import { useFadeAnimated } from "../Hooks/useFadeAnimated"

export const FadeScreen = () => {

    const { fadeIn, fadeOut, opacity} = useFadeAnimated()

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View style={{
                backgroundColor: 'blue',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacity
            }} />

            <Button onPress={fadeIn} title="fadeIn" />
            <Button onPress={fadeOut} title="fadeOut" />

        </View>
    )
}