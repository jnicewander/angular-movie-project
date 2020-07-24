export interface ApiResponse {
    results: MovieDetailsObject[];
}

export interface MovieDetailsObject {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}