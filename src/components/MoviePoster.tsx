import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces'
import { useNavigation } from '@react-navigation/native'


interface Props {
    movie: Movie,
    height?: number,
    width?: number,
}

interface Navigator {
    navigate: (value: string, object: Movie) => void,
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const { navigate } = useNavigation<Navigator>()

    return (
        <TouchableOpacity
            onPress={() => navigate('MovieScreen', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 5,
                paddingBottom: 20,
                paddingHorizontal: 5
                ,
            }}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    image: {
        flex: 1,
        borderRadius: 16,
    }
});