import React, { useEffect, useState, FormEvent } from 'react';

import {
    Container,
    PlayButton,
    AddButton,
    Divisor,
    Header,
    DivInput,
    HambuerguerMenuIcon,
    HeartFavoriteIcon,
    SearchIcon,
    MovieList,
    SideBarMenu,
} from './styles';

import { Link } from 'react-router-dom';

import api from '../../services/api';

interface Films {
    id?: number;
    backdrop_path?: string;
    title?: string | undefined;
    popularity?: number;
    poster_path: string;
}


interface Genres {
    id?: number;
    name: string;
}

const BannerMovie: React.FC = () => {

    const apiKey = "d6ecb4865ebe46ec907e193a6b5c1c19";

    const [films, setFilms] = useState<Films[]>([]);
    const [backgroundMovie, setBackgroundMovie] = useState('');
    const [titleMovie, setTitleMovie] = useState('');
    const [openMenu, setOpenMenu] = useState(false);
    const [genres, setGenres] = useState<Genres[]>([]);
    const [searchMovies, setSearchMovies] = useState('');
    const [messageError, setMessageError] = useState('');

    useEffect(() => {
        api.get(`discover/movie?api_key=${apiKey}&with_genres=28&language=pt-BR`)
            .then(response => {
                setFilms(response.data.results);
                setBackgroundMovie('https://image.tmdb.org/t/p/original' + response.data.results[0].backdrop_path);
                setTitleMovie(response.data.results[0].title);
            })
    }, []);


    useEffect(() => {
        api.get(`genre/movie/list?api_key=${apiKey}&language=pt-BR`)
            .then(response => {
                setGenres(response.data.genres);
            })
    }, []);


    function handleSelectedMovie(backdrop_path: string, title: string, poster_path: string) {

        if (backdrop_path === 'null') {
            setBackgroundMovie(`https://image.tmdb.org/t/p/original${poster_path}`);
        } else {
            setBackgroundMovie(`https://image.tmdb.org/t/p/original${backdrop_path}`);
        }

        setTitleMovie(`${title}`);
    }

    function handleSelectedCategory(categoryId: number) {
        setOpenMenu(false);

        api.get(`discover/movie?api_key=${apiKey}&with_genres=${categoryId}&language=pt-BR`)
            .then(response => {
                setFilms(response.data.results);
                setBackgroundMovie('https://image.tmdb.org/t/p/original' + response.data.results[0].backdrop_path);
                setTitleMovie(response.data.results[0].title);
            });
    }

    async function handleSearchMovie(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        api.get(`search/movie?query=${searchMovies}&api_key=${apiKey}&language=pt-BR`)
            .then(response => {
                setMessageError('');

                if (response.data.results.length > 0) {
                    setFilms(response.data.results);
                } else {
                    setMessageError('Filme não encontrado');
                }

            })

    }

    return (
        <>
            <Header>
                <HambuerguerMenuIcon
                    onClick={
                        () => {
                            setOpenMenu(!openMenu);
                        }
                    }
                    className={openMenu ? 'rotate' : ''}
                />
                <DivInput onSubmit={handleSearchMovie}>
                    <label htmlFor="search" hidden></label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Pesquisar"
                        value={searchMovies}
                        onChange={e => setSearchMovies(e.target.value)}
                    />
                    <button>
                        <SearchIcon />
                    </button>
                    {messageError}
                </DivInput>
                <Link to="/favorites" className="notify">
                    <HeartFavoriteIcon />
                </Link>
            </Header>
            {openMenu ?
                <SideBarMenu>
                    {genres.map(genre => (
                        <div
                            key={genre.id}
                            className="category"
                            onClick={() => handleSelectedCategory(Number(genre.id))}
                        >
                            <div className="selector-div"></div>
                            <span>{genre.name}</span>
                        </div>
                    ))}
                </SideBarMenu> : (
                    <>
                        <Container>
                            <header className="background" style={{ backgroundImage: `url(${backgroundMovie})` }}>
                                <div className="title">
                                    <h1>{titleMovie}</h1>
                                    <span>Descrição</span>
                                    <Divisor />
                                </div>
                            </header>
                            <div className="buttons">
                                <PlayButton>
                                    Play
                                </PlayButton>
                                <AddButton>
                                    Add <span>+</span>
                                </AddButton>
                            </div>
                        </Container>
                        <MovieList>
                            {films.map(film => (
                                <div
                                    key={film.id}
                                    onClick={() => handleSelectedMovie(String(film.backdrop_path), String(film.title), String(film.poster_path))}
                                >
                                    <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
                                </div>
                            )
                            )}
                        </MovieList>
                    </>
                )}
        </>
    );
}

export default BannerMovie;