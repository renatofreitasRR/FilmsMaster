import styled, { css } from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material-sharp';
import { TrashBin } from 'styled-icons/ionicons-sharp';
import { CommentAdd } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
    height: 100%;
    max-width: 80%;
    margin: 0 auto;

    > header{
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

        
    }

    > h1{
        margin-top: 76px;

        text-align: center;

        font-size: 1.5em;
        color: var(--white);

    }

`;


const icons = css`
    height: 40px;
    width: 42px;
`

export const ArrowLeft = styled(KeyboardArrowLeft)`${icons}`
export const Trash = styled(TrashBin)`${icons}`
export const Comment = styled(CommentAdd)`${icons}`

export const FavoriteMovies = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    > .movie{
        background-color: #fff;

        height: 300px;
        width: 250px;

        margin-top: 10px;

        > div{
            background-color: #ccc;

            height: 220px;
            width: 180px;
        }
    }
`
