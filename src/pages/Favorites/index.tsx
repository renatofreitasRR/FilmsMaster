import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    ArrowLeft,
    FavoriteMovies,
    Trash
} from './styles';


interface Movies {
    id: number;
    backdrop_path?: string;
    title?: string | undefined;
    popularity?: number;
    poster_path: string;
}


const Favorites: React.FC = () => {

    const localStorageRepositories = localStorage.getItem('@tmdb-api:movies');

    const verifySoraged = localStorageRepositories
            ? JSON.parse(localStorageRepositories)
            : [];

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
                {verifySoraged.map((movie: Movies) => movie.title !== null ?  (
                    <div key={movie.id} className="movie">
                        <img src={movie.poster_path} alt={movie.title} />
                        <Trash />
                    </div>
                ): null)}
            </FavoriteMovies>
        </Container>
    );
}

export default Favorites;