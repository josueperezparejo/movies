export interface UpComingDB {
    dates:         UpComingDates;
    page:          number;
    results:       UpComingMovies[];
    total_pages:   number;
    total_results: number;
}

export interface UpComingDates {
    maximum: string;
    minimum: string;
}

export interface UpComingMovies {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
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