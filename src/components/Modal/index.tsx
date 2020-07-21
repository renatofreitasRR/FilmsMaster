import React, { useState, useEffect } from 'react';
import { Container, CloseIcon } from './styles';
import Iframe from 'react-iframe';
import api from '../../services/api';


interface PropsData {
    movieId: number;
    onClose(): void;

}

const Modal: React.FC<PropsData> = ({ movieId, onClose = () => { } }) => {

    const apiKey = "d6ecb4865ebe46ec907e193a6b5c1c19";
    const [movieVideo, setMovieVideo] = useState('');
    const [movieVideoError, setMovieVideoError] = useState('');


    useEffect(() => {
        api.get(`movie/${movieId}/videos?api_key=${apiKey}`)
            .then(response => {
                if (response.data.results.length > 0) {
                    setMovieVideo(response.data.results[0].key);
                } else {
                    setMovieVideoError('Video não encontrado')
                }
            })
    }, [movieId]);

    return (
        <>
            <Container onClick={onClose}>
                <div>
                    <CloseIcon onClick={onClose} />
                </div>

                {movieVideo
                    ? <Iframe
                        url={`https://www.youtube.com/embed/${movieVideo}`}
                    />
                    : (
                        <div className="error"><h1>{movieVideoError}</h1></div>

                    )
                }

            </Container>
        </>
    );
}

export default Modal;