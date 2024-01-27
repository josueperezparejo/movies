import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import {
    NowPlayingDB,
    NowPlayingMovies,
    PopularDB,
    PopularMovies,
    TopRatedDB,
    TopRatedMovies,
    UpComingDB,
    UpComingMovies
} from "../interfaces";

interface MoviesState {
    nowPlaying: NowPlayingMovies[],
    popular: PopularMovies[],
    topRated: TopRatedMovies[],
    upComing: UpComingMovies[],
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [moviesState, setMoviesState] = useState<MoviesState>()

    const getMovies = async () => {
        try {

            const nowPlayingPromise = movieDB.get<NowPlayingDB>('/now_playing')
            const popularPromise = movieDB.get<PopularDB>('/popular')
            const topRatedPromise = movieDB.get<TopRatedDB>('/top_rated')
            const upComingPromise = movieDB.get<UpComingDB>('/upcoming')

            const response = await Promise.all([
                nowPlayingPromise,
                popularPromise,
                topRatedPromise,
                upComingPromise
            ])

            setMoviesState({
                nowPlaying: response[0].data.results,
                popular: response[1].data.results,
                topRated: response[2].data.results,
                upComing: response[3].data.results
            })

            setIsLoading(false)

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    };

    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading,
    }
}