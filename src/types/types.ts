export default interface IMovie {
    Error?: string;
    Title?: string;
    Poster?: string;
    Year?: string;
    Country?: string;
    Actors?: string;
    Plot?: string;
    Director?: string;
    Runtime?: string;
    Metascore?: string;
    result: {
        Error?: string;
        Title?: string;
        Poster?: string;
        Year?: string;
        Country?: string;
        Actors?: string;
        Plot?: string;
        Director?: string;
        Runtime?: string;
        Metascore?: string;
    }
}