import styled from 'styled-components';
import { Close } from 'styled-icons/evaicons-solid';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    position: absolute;
    left: 0;
    top: 0;
    
    z-index: 1000;

    background-color: rgba(0, 0, 0, 0.7);

    iframe{
        width: 70%;
        height: 70%;
    }

`;

export const CloseIcon = styled(Close)`
    color: #fff;

    height: 50px;
    width: 50px;
`; 