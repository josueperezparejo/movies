import 'react-native-gesture-handler'
import { StackNavigator } from './src/navigator/StackNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
}