import React from 'react';
import {Link} from 'react-router-dom';

import { Container } from './styles';
import illustration from '../../assets/illustration.svg';

const Home: React.FC = () => {
  return(
    <Container>
            <h1>Recomendações de filmes para você</h1>
            <img src={illustration} alt=""/>
            <Link to="/movies">
                Entrar
            </Link>
    </Container>
  );
}

export default Home;