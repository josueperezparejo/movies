import { StyleSheet, View } from 'react-native'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientAnimated = ({children}:Props) => {
  return (
    <View style={styles.container}>
        {/* <LinearGradient style={{...StyleSheet.absoluteFillObject}} colors={['blue', 'red', 'yellow']} /> */}
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});