import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--black);

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media(min-width: 700px){
        flex-direction: row;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(min-width: 700px){
            order: 0;
        }

        order: 2;

        width: 50vw;
    }

    img{
        @media(min-width: 700px){
            width: 100%;
            height: 100%;
        }
    }


    h1{
        margin: 30px 40px;
        font-size: 2rem;
        font-weight: bold;
        color: var(--red);
        max-width: 350px;

        @media(min-width: 700px){
            font-size: 3.5rem;
        }


    }

   

    a{

        display: block;
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 72px;

        font-size: 24px;
        font-weight: bold;

        cursor: pointer;

        text-decoration: none;

        color: #fff;
        background-color: var(--title-and-input);

        width: 265px;
        height: 84px;
    }
`;
