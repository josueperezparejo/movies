import { FlatList, Text, View } from 'react-native'
import { Cast, MovieDetailsDB } from '../interfaces/MovieDetailsInterface'
import { Icon } from 'react-native-elements'
import currencyFormatter from 'currency-formatter'
import { CastActor } from './CastActor'

interface Props {
    details?: MovieDetailsDB,
    cast: Cast[]
}

export const MovieFull = ({ details, cast }: Props) => {
    return (
        <>
            <View style={{}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name='equalizer'
                        color='#517fa4'
                    />
                    <Text>{details?.vote_average}</Text>
                    <Text style={{ marginLeft: 8 }}>{details?.genres.map(genre => genre.name).join(', ')}</Text>
                </View>

                <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {details?.overview}
                </Text>

                <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(details!.budget, { code: 'USD' })}
                </Text>
            </View>

            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    renderItem={({ item }) => (
                        <CastActor actor={item} />
                    )}
                    keyExtractor={(actor) => actor.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    )
}
