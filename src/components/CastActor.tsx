import { Image, StyleSheet, Text, View } from "react-native"
import { Cast } from "../interfaces"
import { Icon } from "react-native-elements"

interface Props {
    actor: Cast
}

export const CastActor = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`

    return (

        <View>
            <View style={styles.container}>

                {actor.profile_path && (
                    <Image style={styles.profileImage} source={{ uri }} />
                )}

                <View style={{ marginLeft: 10 }}>

                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        {actor.name}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            name='theater-comedy'
                            color='#517fa4'
                        />

                        <Text style={styles.character}>
                            {actor.character}
                        </Text>

                    </View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 10, 
        backgroundColor: '#def7ff', 
        borderRadius: 12, 
        padding: 12, 
        marginRight: 8 
    },
    profileImage: { 
        width: 50, 
        height: 50, 
        borderRadius: 10 
    },
    character: { 
        fontSize: 16, 
        color: 'blue', 
        marginLeft: 6 
    }
});