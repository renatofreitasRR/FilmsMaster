import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    ArrowLeft,
    FavoriteMovies,
    Trash,
    Comment
} from './styles';


interface Movies {
    id?: number;
    backdrop_path?: string;
    title?: string | undefined;
    popularity?: number;
    poster_path: string;
}


const Favorites: React.FC = () => {
    const [movies, setMovies] = useState<Movies[]>(() => {
        const localStorageRepositories = localStorage.getItem('@tmdb-api:movies');

        if (localStorageRepositories) {
            return JSON.parse(localStorageRepositories);
        } else {
            return [];
        };

    });


    return (
        <Container>
            <header>
                <Link to="movies">
                    <ArrowLeft />
                    <span>Voltar</span>
                </Link>
            </header>
            <h1>Meus filmes favoritos</h1>
            <FavoriteMovies>
                {movies.map(movie => (
                    <div key={movie.id} className="movie">
                        <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} />
                        <div>
                            <Comment />
                            <Trash />
                        </div>
                    </div>
                ))}
            </FavoriteMovies>
        </Container>
    );
}

export default Favorites;