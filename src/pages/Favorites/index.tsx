import React, { useEffect, useState } from 'react';
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

    const [favoriteMovies, setFavoriteMovies] = useState<Movies[]>([]);

    useEffect(() => {
        const localStorageMovies = localStorage.getItem('@tmdb-api:movies');

        const verifyStoraged = localStorageMovies
            ? JSON.parse(localStorageMovies)
            : [];

            setFavoriteMovies(verifyStoraged);

    }, [])


    function handleExcluseMovie(id: number) {

        const filteredMovies = favoriteMovies.filter((movie: any) => movie.id !== id);


        localStorage.setItem('@tmdb-api:movies', JSON.stringify(filteredMovies));

        setFavoriteMovies(filteredMovies);
    }



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
                {favoriteMovies.map((movie: Movies) => movie.title !== null ? (
                    <div key={movie.id} className="movie">
                        <img src={movie.poster_path} alt={movie.title} />
                        <Trash onClick={() => handleExcluseMovie(movie.id)} />
                    </div>
                ) : null)}
            </FavoriteMovies>
        </Container>
    );
}

export default Favorites;