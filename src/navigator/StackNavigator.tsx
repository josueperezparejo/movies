import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, MovieScreen } from '../screens'
import { Movie } from '../interfaces'

export type RootStackParams = {
  HomeScreen: undefined,
  MovieScreen: Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
    </Stack.Navigator>
  );
}