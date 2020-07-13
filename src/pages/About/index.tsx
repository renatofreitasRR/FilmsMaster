import React, { useEffect, useState } from 'react';

import {
    Container,
    Content,
    ArrowLeft,
    Header
} from './styles';

import { Link } from 'react-router-dom';

import api from '../../services/api';


interface Movie {
    backdrop_path: string;
    budget: number;
    genres?: [
        {
            id?: number;
            name: string;
        }
    ];
    homepage: string;
    overview: string;
    poster_path: string;
    production_companies?: [
        {
            id: number;
            logo_path: string;
            name: string;
        }
    ];
    release_date: string;
    title: string;
}

const About: React.FC = () => {

    const apiKey = "d6ecb4865ebe46ec907e193a6b5c1c19";

    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        api.get(`movie/516486?api_key=${apiKey}&language=pt-BR`)
            .then(response => {
                setMovie(response.data);
                console.log(response.data);
            })
    }, []);
    return (
        <>
            <Header>
                <Link to="movies">
                    <ArrowLeft />
                    <span>Voltar</span>
                </Link>
            </Header>
            {movie && (
                <Container>
                    <div className="background" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` }}>
                        <h1>{movie.title}</h1>
                    </div>
                    <Content>
                        <p>{movie.overview}</p>
                        <small>Data de lançamento: {movie.release_date}</small> <br />
                        <small>Preço de produção: <strong>R$ {movie.budget}</strong></small>

                        <h2>Generos</h2>
                        <div>
                            {movie.genres?.map(genre => (
                                <span key={genre.id}>{genre.name}</span>
                            ))}
                        </div>

                        <h3>Produzido por</h3>
                        <div>
                            {movie.production_companies?.map(companies => (
                                <div key={companies.id}>
                                    <img src={`https://image.tmdb.org/t/p/original${companies.logo_path}`} alt={companies.name} />
                                    <span>{companies.name}</span>
                                </div>
                            ))}
                        </div>
                        <h3>Pagina principal do filme: <a href={movie.homepage}>Link</a></h3>
                    </Content>
                </Container>
            )
            }
        </>
    );
}

export default About;