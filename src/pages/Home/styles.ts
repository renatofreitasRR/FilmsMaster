import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--black);

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin: 30px 40px;
        font-size: 2rem;
        font-weight: bold;
        color: var(--red);
        max-width: 350px;
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
