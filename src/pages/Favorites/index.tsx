import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    ArrowLeft,
    FavoriteMovies,
    Trash,
    Comment
} from './styles';


const Favorites: React.FC = () => {
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
                <div className="movie">
                    <div>

                    </div>
                    <Comment />
                    <Trash />
                </div>
            </FavoriteMovies>
        </Container>
    );
}

export default Favorites;