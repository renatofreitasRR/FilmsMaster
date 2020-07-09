import React, { useEffect, useState } from 'react';

import {
    Container,
    Title,
    PlayButton,
    AddButton,
    Divisor,
    Header,
    DivInput,
    SearchInput,
    HambuerguerMenuIcon,
    HeartFavoriteIcon,
    SearchButton,
    SearchIcon,
    MovieList,
    SideBarMenu,
    Selector,
    CategoryName,
} from './styles';


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

    useEffect(() => {
        api.get(`discover/movie?api_key=${apiKey}&with_genres=28&language=pt-BR`)
            .then(response => {
                setFilms(response.data.results);
            })
    }, []);


    useEffect(() => {
        api.get(`genre/movie/list?api_key=${apiKey}&language=pt-BR`)
            .then(response => {
                setGenres(response.data.genres);
            })
    }, []);


    function handleSelectedMovie(backdrop_path: string, title: string) {
        setBackgroundMovie('https://image.tmdb.org/t/p/original' + backdrop_path);
        setTitleMovie(`${title}`);
    }

    function handleSelectedCategory(categoryId: number) {
        api.get(`discover/movie?api_key=${apiKey}&with_genres=${categoryId}&language=pt-BR`)
            .then(response => {
                setFilms(response.data.results);
            });
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
                <DivInput>
                    <label htmlFor="search" hidden></label>
                    <SearchInput type="text" id="search" placeholder="Pesquisar" />
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </DivInput>
                <div className="notify">
                    <HeartFavoriteIcon />
                </div>
            </Header>
            {openMenu ?
                <SideBarMenu>
                    {genres.map(genre => (
                        <div
                            key={genre.id}
                            className="category"
                            onClick={() => handleSelectedCategory(Number(genre.id))}
                        >
                            <Selector />
                            <CategoryName>{genre.name}</CategoryName>
                        </div>
                    ))}
                </SideBarMenu> : (
                    <>
                        <Container>
                            <div className="background" style={{ backgroundImage: `url(${backgroundMovie})` }}>
                                <div className="title">
                                    <Title>{titleMovie}</Title>
                                    <span>Descrição</span>
                                    <Divisor />
                                </div>
                            </div>
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
                                    onClick={() => handleSelectedMovie(String(film.backdrop_path), String(film.title))}
                                >
                                    <img src={film.poster_path ? `https://image.tmdb.org/t/p/w300${film.poster_path}` : `https://image.tmdb.org/t/p/w300${film.backdrop_path}`} alt={film.title} />
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