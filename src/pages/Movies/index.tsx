import React, { useEffect, useState, FormEvent, useCallback } from 'react';

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
    ArrowLeftIcon,
    ArrowRightIcon,
    Arrows
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

export interface Props {
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
    const [pages, setPages] = useState(1);
    const [searchMovies, setSearchMovies] = useState('');
    const [messageError, setMessageError] = useState('');
    const [messageAdd, setMessageAdd] = useState('');
    const [storageLength, setStorageLength] = useState(verifySoraged.length);
    const [movieObjectTeste, setMovieObjectTeste] = useState({
        id: 0,
        backdrop_path: "",
        title: "",
        poster_path: "",
    });

    useEffect(() => {
        api.get(`discover/movie?api_key=${apiKey}&with_genres=${genresSelected}&language=pt-BR&page=${pages}`)
            .then(response => {
                setFilms(response.data.results);
                setMovieObjectTeste({
                    id: response.data.results[0].id,
                    backdrop_path: `https://image.tmdb.org/t/p/original${response.data.results[0].backdrop_path}`,
                    title: response.data.results[0].title,
                    poster_path: `https://image.tmdb.org/t/p/original${response.data.results[0].poster_path}`,
                });

                const movieIsFavorite = verifyFavorite(response.data.results[0].id);

                if (movieIsFavorite === true) {
                    setMessageAdd('Favoritado');
                } else {
                    setMessageAdd('Add +');
                }

            })
    }, [genresSelected, pages]);


    useEffect(() => {
        api.get(`genre/movie/list?api_key=${apiKey}&language=pt-BR`)
            .then(response => {
                setGenres(response.data.genres);
            })
    }, []);


    const handleSelectedMovie = useCallback((backdrop_path: string, title: string, poster_path: string, id: number, movie: any) => {
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

        const movieIsFavorite = verifyFavorite(id);

        if (movieIsFavorite === true) {
            setMessageAdd('Favoritado');
        } else {
            setMessageAdd('Add +');
        }


    }, [])


    function verifyFavorite(id: number) {
        const moviesStoraged = localStorage.getItem('@tmdb-api:movies');

        const verifySoraged = moviesStoraged
            ? JSON.parse(moviesStoraged)
            : []

        const findSameId = verifySoraged.find((movie: any) => movie.id === id);

        if (findSameId) {
            return true;
        } else {
            return false;
        }

    }


    const handleSelectedCategory = useCallback((categoryId: number) => {
        setOpenMenu(false);
        setGenresSelected(categoryId);
    }, []);

    const handleFavoriteMovie = useCallback((movieObjectTeste: Films) => {
        const moviesStoraged = localStorage.getItem('@tmdb-api:movies');

        const verifySoraged = moviesStoraged
            ? JSON.parse(moviesStoraged)
            : []

        const sameMovie = verifySoraged.filter((movie: any) => movie.id === movieObjectTeste.id);

        if (sameMovie.length > 0) {
            return;
        }

        const newStoraged = [...verifySoraged, movieObjectTeste]

        localStorage.setItem('@tmdb-api:movies', JSON.stringify(newStoraged));

        setStorageLength(newStoraged.length);
        setMessageAdd('Favoritado');

    }, [])



    const handleSearchMovie = useCallback((event: FormEvent<HTMLFormElement>) => {
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
    }, [searchMovies])




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
                                    {messageAdd ? messageAdd : 'Add +'}
                                </AddButton>
                            </div>
                        </Container>


                        <Arrows>
                            <ArrowLeftIcon onClick={() => setPages(c => c - 1)} />
                            <ArrowRightIcon onClick={() => setPages(c => c + 1)} />
                        </Arrows>

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