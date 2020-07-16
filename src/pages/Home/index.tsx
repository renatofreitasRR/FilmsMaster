import React from 'react';
import {Link} from 'react-router-dom';

import { Container } from './styles';
import illustration from '../../assets/illustration.svg';

const Home: React.FC = () => {
  return(
    <Container>
            <div>
              <h1>Recomendações de filmes para você</h1>
              <Link to="/movies">
                  Entrar
              </Link>
            </div>  
            
            <img src={illustration} alt=""/>
            
    </Container>
  );
}

export default Home;