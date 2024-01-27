export interface NowPlayingDB {
    dates:         NowPlayingDates;
    page:          number;
    results:       NowPlayingMovies[];
    total_pages:   number;
    total_results: number;
}

export interface NowPlayingDates {
    maximum: string;
    minimum: string;
}

export interface NowPlayingMovies {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: NowPlayingOriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum NowPlayingOriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
}