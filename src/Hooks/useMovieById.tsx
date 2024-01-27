import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Cast, MovieCredits, MovieDetailsDB } from "../interfaces"

interface MovieDetails {
    isLoading: boolean,
    details?: MovieDetailsDB,
    cast: Cast[]
}

export const useMovieById = (movieID: number) => {

    const [movieFull, setMovieFull] = useState<MovieDetails>({
        isLoading: true,
        details: undefined,
        cast: []
    })

    const getMovieDetails = async () => {
        try {

            const movieDetailsPromise = movieDB.get<MovieDetailsDB>(`/${movieID}`)
            const movieCastPromise = movieDB.get<MovieCredits>(`/${movieID}/credits`)

            const [MovieDetailsResponse, MovieCastResponse] = await Promise.all([movieDetailsPromise, movieCastPromise])

            setMovieFull({
                isLoading: false,
                details: MovieDetailsResponse.data,
                cast: MovieCastResponse.data.cast
            })
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...movieFull
    }
}