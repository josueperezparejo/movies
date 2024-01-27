import { StackScreenProps } from "@react-navigation/stack"
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParams } from "../navigator/StackNavigator"
import { useMovieById } from "../Hooks/useMovieById"
import { MovieFull } from "../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'MovieScreen'> {}



export const MovieScreen = ({ route }: Props) => {
  const { goBack } = useNavigation()

  const { top } = useSafeAreaInsets()

  const movie = route.params
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const { isLoading, details, cast } = useMovieById(movie.id)


  return (
    <ScrollView style={{ marginTop: top }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image style={styles.poster} source={{ uri: imageUrl }} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subtitle}>{movie.title}</Text>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        {
          isLoading
            ? <ActivityIndicator size={30} color={'blue'} style={{ marginTop: 20 }} />
            : <MovieFull cast={cast} details={details} />
        }
      </View>

      <TouchableOpacity onPress={() => goBack()} style={{ position: 'absolute', zIndex: 999, elevation: 9, top: 30, left: 10, backgroundColor: '#333', borderRadius: 100, padding: 14}}>
        <Icon
          name='arrow-back-ios'
          color='white'
          size={20}
        />
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden'
  },
  poster: {
    flex: 1
  },
  titleContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 16
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});