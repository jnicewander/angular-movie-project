export interface ApiResponse {
    results: MovieDetailsObject[];
}

export interface MovieDetailsObject {
    id: number;
    title: string;
    vote_average: number;
    release_date: string;
}