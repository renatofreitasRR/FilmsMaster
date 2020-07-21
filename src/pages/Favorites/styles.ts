import styled, { css } from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material-sharp';
import { TrashBin } from 'styled-icons/ionicons-sharp';

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
export const Trash = styled(TrashBin)`${icons}; color: red;`

export const FavoriteMovies = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    

    > .movie{
        display: flex;
        flex-direction: column;

        margin-bottom: 14px;

        width: 100%;
        
        > div{
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-top: 14px;
        }

        > img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

    }
`
