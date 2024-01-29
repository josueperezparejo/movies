import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientAnimated = ({children}:Props) => {
  return (
    <View style={styles.container}>
        <LinearGradient style={{...StyleSheet.absoluteFillObject}} colors={['#3335be', '#75b0bb', '#e8d5b5']} />
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});