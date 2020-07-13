import styled from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material-sharp';


export const Header = styled.header`
    color: var(--white);
    z-index: 10;

    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;

    height: 56px;
    width: 100%;

    display: flex;
    align-items: center;

    a{
        color: var(--white);

        display: flex;
        align-items: center;

        text-decoration: none;
    }
`;

export const Container = styled.div`
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        border-radius: 0px 0px 50px 50px;


        img {
            width: 20px;
            height: 20px;
        }

    > .background{

        display:flex;
        align-items:flex-end;

        background-size:cover;
        background-position:center;

        border-radius: 0px 0px 50px 50px;

        width:100%;
        height:45vh;
        margin-bottom:50px;

      
        > h1{
            font-family: Roboto;

            color: #fff;

            font-weight: bold;
            font-size: 1.8em;
            line-height: 42px;
            letter-spacing: 0.08em;
        }

    }

`;


export const Content = styled.div`

    max-width: 90%;
    margin: 0 auto;

    color: var(--white);

    > p {
        font-size: 1em;
        margin-bottom: 8px;
    }

    > small{
        margin-bottom: 4px;
    }

    h2{
        margin-top: 8px;
        font-size: 1.2em;    
    }

    div >span{
        margin-right: 8px;
    }
`;

export const ArrowLeft = styled(KeyboardArrowLeft)`
    height: 40px;
    width: 42px;
`;