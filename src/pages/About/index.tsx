import React, { useEffect, useState } from 'react';

import {
    Container,
    Content,
    ArrowLeft,
    Header,
    Popularity,
    Informations,
    Description,
    Genres,
    Companies,
    Divisor,
    StarCount,
    StarCountMiddle
} from './styles';

import { Link, useRouteMatch } from 'react-router-dom';

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
    popularity: number;
    runtime: number;
    vote_average: number;

}

interface MovieParams {
    id: string;
}

const About: React.FC = () => {

    const apiKey = "d6ecb4865ebe46ec907e193a6b5c1c19";

    const [movie, setMovie] = useState<Movie | null>(null);

    const { params } = useRouteMatch<MovieParams>();

    useEffect(() => {
        api.get(`movie/${params.id}?api_key=${apiKey}&language=pt-BR`)
            .then(response => {
                setMovie(response.data);
            })
    }, [params.id]);


    let rows = [];

    if (movie) {
        const verifyPoint = String(movie.vote_average);
        const point = verifyPoint.includes('.');

        if (point) {
            for (let i = 0; i < movie.vote_average - 1; i++) {
                rows.push(<StarCount />);
            }
            rows.push(<StarCountMiddle />);
        } else {

            for (let i = 0; i < movie.vote_average; i++) {
                rows.push(<StarCount />);
            }
        }
    }


    return (
        <>
            <Header>
                <Link to="/movies">
                    <ArrowLeft />
                    <span>Voltar</span>
                </Link>
            </Header>
            {movie && (
                <Container>
                    <div className="background">
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                        <h1>{movie.title}</h1>
                    </div>
                    <Content>
                        <Popularity>
                            <div>
                                <span>{movie.vote_average}</span>
                                {rows}
                            </div>
                            <span>Popularidade: {movie.popularity}</span>
                        </Popularity>

                        <Informations>
                            <div>
                                <span>Duração: </span>
                                <small>{movie.runtime}m</small>
                            </div>
                            <Divisor />
                            <div>
                                <span>Data: </span>
                                <small>{movie.release_date}</small>
                            </div>
                            <Divisor />
                            <div>
                                <span>Preço de produção: </span>
                                <small>R$: {movie.budget}</small>
                            </div>
                        </Informations>

                        <Description>
                            <h2>Descrição</h2>
                            <p>{movie.overview}</p>
                        </Description>


                        <h2>Genêros</h2>
                        <Genres>
                            {movie.genres?.map(genre => (
                                <span key={genre.id}>{genre.name}</span>
                            ))}
                        </Genres>

                        <h3>Produção</h3>
                        <Companies>
                            {movie.production_companies?.map(companies => companies.logo_path !== null ? (
                                <div key={companies.id}>
                                    <img src={`https://image.tmdb.org/t/p/original${companies.logo_path}`} alt={companies.name} />
                                    <span>{companies.name}</span>
                                </div>
                            ) : (<span>{companies.name}</span>))}
                        </Companies>
                        <h4>Pagina principal do filme: <a href={movie.homepage}>Link</a></h4>
                    </Content>
                </Container>
            )
            }
        </>
    );
}

export default About;