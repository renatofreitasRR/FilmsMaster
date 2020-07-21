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
    AboutIcon,
} from './styles';

import { Link } from 'react-router-dom';

import api from '../../services/api';

import Modal from '../../components/Modal';

interface Films {
    id?: number;
    backdrop_path?: string;
    title?: string | undefined;
    poster_path: string;

}

interface Genres {
    id?: number;
    name: string;
}

export interface Props{
    storageLengthNumber: number;
}

const BannerMovie: React.FC<Props> = () => {

    const apiKey = "d6ecb4865ebe46ec907e193a6b5c1c19";

    const [films, setFilms] = useState<Films[]>([]);

    const moviesStoraged = localStorage.getItem('@tmdb-api:movies');

    const verifySoraged = moviesStoraged
    ? JSON.parse(moviesStoraged)
    : []

    const [openMenu, setOpenMenu] = useState(false);
    const [modalMovie, setModalMovie] = useState(false);
    const [genres, setGenres] = useState<Genres[]>([]);
    const [genresSelected, setGenresSelected] = useState(28);
    const [searchMovies, setSearchMovies] = useState('');
    const [messageError, setMessageError] = useState('');
    const [storageLength, setStorageLength] = useState(verifySoraged.length);
    const [movieObjectTeste, setMovieObjectTeste] = useState({
        id: 0,
        backdrop_path: "",
        title: "",
        poster_path: "",
    });

    useEffect(() => {
        api.get(`discover/movie?api_key=${apiKey}&with_genres=${genresSelected}&language=pt-BR`)
            .then(response => {
                setFilms(response.data.results);
                setMovieObjectTeste({
                    id: response.data.results[0].id,
                    backdrop_path: `https://image.tmdb.org/t/p/original${response.data.results[0].backdrop_path}`,
                    title: response.data.results[0].title,
                    poster_path: `https://image.tmdb.org/t/p/original${response.data.results[0].poster_path}`,
                });
            })
    }, [genresSelected]);


    useEffect(() => {
        api.get(`genre/movie/list?api_key=${apiKey}&language=pt-BR`)
            .then(response => {
                setGenres(response.data.genres);
            })
    }, []);


    function handleSelectedMovie(backdrop_path: string, title: string, poster_path: string, id: number, movie: any) {

        if (backdrop_path === 'null') {
            setMovieObjectTeste({
                id,
                backdrop_path: "null",
                title,
                poster_path: `https://image.tmdb.org/t/p/original${poster_path}`,
            });
        } else {
            setMovieObjectTeste({
                id,
                backdrop_path: `https://image.tmdb.org/t/p/original${backdrop_path}`,
                title,
                poster_path: `https://image.tmdb.org/t/p/original${poster_path}`,
            });
        }

    }

    function handleSelectedCategory(categoryId: number) {
        setOpenMenu(false);
        setGenresSelected(categoryId);
    }

    function handleFavoriteMovie(movieObjectTeste: Films) {
        const moviesStoraged = localStorage.getItem('@tmdb-api:movies');

        const verifySoraged = moviesStoraged
            ? JSON.parse(moviesStoraged)
            : []

        const newStoraged = [...verifySoraged, movieObjectTeste]

        localStorage.setItem('@tmdb-api:movies', JSON.stringify(newStoraged));

        setStorageLength(newStoraged.length);
    }

   

    async function handleSearchMovie(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        api.get(`search/movie?query=${searchMovies}&api_key=${apiKey}&language=pt-BR`)
            .then(response => {
                setSearchMovies('');
                setMessageError('');

                if (response.data.results.length > 0) {
                    setFilms(response.data.results);
                    setMovieObjectTeste({
                        id: response.data.results[0].id,
                        backdrop_path: `https://image.tmdb.org/t/p/original${response.data.results[0].backdrop_path}`,
                        title: response.data.results[0].title,
                        poster_path: `https://image.tmdb.org/t/p/original${response.data.results[0].poster_path}`,
                    });
                } else {
                    setMessageError('Filme não encontrado');
                }

            })

    }


    return (
        <>
            <Header storageLengthNumber={storageLength} >
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
                    <span>{messageError}</span>
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
                            <header className="background">
                                <img src={movieObjectTeste.backdrop_path !== "null" ? movieObjectTeste.backdrop_path : movieObjectTeste.poster_path} alt={movieObjectTeste.title} />
                                <div className="title">
                                    <h1>{movieObjectTeste.title}</h1>
                                    <Link to={`/about/${movieObjectTeste.id}`}>
                                        <AboutIcon />
                                        Sobre
                                    </Link>
                                    <Divisor />
                                </div>
                            </header>
                            <div className="buttons">
                                <PlayButton onClick={() => setModalMovie(true)}>
                                    Play
                                </PlayButton>
                                <AddButton
                                    onClick={() => handleFavoriteMovie(movieObjectTeste)}
                                >
                                    Add <span>+</span>
                                </AddButton>

                            </div>
                        </Container>
                        <MovieList>
                            {films.map(film => film.poster_path ? (
                                <div
                                    key={film.id}
                                    onClick={() => handleSelectedMovie(String(film.backdrop_path), String(film.title), String(film.poster_path), Number(film.id), film)}
                                >
                                    <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
                                </div>
                            ) : null
                            )}
                        </MovieList>
                    </>
                )}
            {modalMovie && (
                <>
                    <Modal movieId={movieObjectTeste.id} onClose={() => setModalMovie(false)} />
                </>
            )}
        </>
    );
}

export default BannerMovie;