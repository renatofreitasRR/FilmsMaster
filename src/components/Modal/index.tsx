import React, { useState, useEffect } from 'react';
import { Container, CloseIcon } from './styles';
import Iframe from 'react-iframe';
import api from '../../services/api';


interface PropsData {
    movieId: number;
    onClose(): void;

}

const Modal: React.FC<PropsData> = ({ movieId, onClose = () => {} }) => {

    const apiKey = "d6ecb4865ebe46ec907e193a6b5c1c19";
    const [movieVideo, setMovieVideo] = useState('');

    useEffect(() => {
        api.get(`movie/${movieId}/videos?api_key=${apiKey}`)
            .then(response => {
                setMovieVideo(response.data.results[0].key);
            })
    }, [movieId]);

    return (
        <>
            <Container onClick={onClose}>
                <CloseIcon
                    onClick={onClose}
                />
                    <Iframe
                    url={`https://www.youtube.com/embed/${movieVideo}`}
                />
            </Container>
        </>
    );
}

export default Modal;