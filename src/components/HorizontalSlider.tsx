import { FlatList, StyleSheet, Text, View } from "react-native"
import { MoviePoster } from "./MoviePoster"

interface Props {
    title: string,
    movies?: any
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 260
    },
    title: { 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginLeft: 10, 
        marginBottom: 10 
    }
});