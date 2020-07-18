import React, { useState, useEffect } from 'react';
import { Container, CloseIcon } from './styles';
import Iframe from 'react-iframe';
import api from '../../services/api';


type PropsData = {
    movieId: number;
}

const Modal: React.FC<PropsData> = ({ movieId }) => {

    const apiKey = "d6ecb4865ebe46ec907e193a6b5c1c19";

    const [movieVideo, setMovieVideo] = useState('');

    const [toggleIframe, setToggleIframe] = useState(true);


    useEffect(() => {
        api.get(`movie/${movieId}/videos?api_key=${apiKey}`)
            .then(response => {
                setMovieVideo(response.data.results[0].key);
            })
    }, [movieId]);

    function handleVisibility() {
        setToggleIframe(false);
    }


    return (
        <>
            {toggleIframe ? (
                <Container>
                    <CloseIcon
                        onClick={handleVisibility}
                    />
                    <Iframe
                        url={`https://www.youtube.com/embed/${movieVideo}`}
                    />
                </Container>
            ) : null}
        </>
    );
}

export default Modal;