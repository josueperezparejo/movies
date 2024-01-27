import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native"
import { useMovies } from "../Hooks/useMovies"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Carousel from "react-native-snap-carousel"
import { GradientAnimated, HorizontalSlider, MoviePoster } from "../components"

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={'blue'} size={100} />
            </View>
        )
    }

    return (
        <GradientAnimated>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: top + 20 }}>

                    {/* Carousel Principal */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying!}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                        />
                    </View>

                    {/* Peliculas Populares */}
                    <HorizontalSlider title={"Populares"} movies={popular} />
                    {/* Peliculas Populares */}
                    <HorizontalSlider title={"Top"} movies={topRated} />
                    {/* Peliculas Populares */}
                    <HorizontalSlider title={"Proximamente"} movies={upComing} />

                </View>
            </ScrollView>
        </GradientAnimated>
    )
}