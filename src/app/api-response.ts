export interface ApiResponse {
    results: MovieDetailsObject[];
}

export interface MovieDetailsObject {
    title: string;
    release_date: string;
    vote_average: number;
}