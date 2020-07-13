import styled from 'styled-components';
import { Menu } from 'styled-icons/material-sharp';
import { Heart } from 'styled-icons/icomoon';
import { Search } from 'styled-icons/heroicons-solid';

export const Container = styled.div`
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        border-radius: 0px 0px 50px 50px;


    > .background{
        position: relative;

        display:flex;
        align-items:flex-end;
        justify-content:center;

        background-size:cover;
        background-position:center;

        border-radius: 0px 0px 50px 50px;

        width:100%;
        height:45vh;
        margin-bottom:50px;

        > .title{
            margin: 0 0 0 10px;
            bottom: -50px;
            position: absolute;
            display:flex;
            flex-direction: column;

            > h1{
                font-family: Roboto;

                color: #fff;

                font-weight: bold;
                font-size: 1.8em;
                line-height: 42px;
                letter-spacing: 0.08em;
            }

            > span{
                margin-top: 5px;
                font-weight: 500;
                color: var(--white);
            }
        }
    }


    > .buttons{
        margin-top: 16px;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;

export const PlayButton = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;

    background-color: var(--title-and-input);
    color: var(--white);
    
    border-radius: 4px;

    margin: 0 0 0 30px;

    width: 100%;
    height: 56px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.08em;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }


`

export const AddButton = styled.div`
    color: var(--white);

    display: flex;
    align-items:center;
    justify-content:center;

    background-color: transparent;
    opacity: 0.8;

    border: 3px solid var(--white);
    border-radius: 4px;

    margin: 0 32px 0 30px;

    width: 100%;
    height: 56px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.08em;

    cursor: pointer;

    > span {
        padding-left: 8px;
        font-size: 36px;
    }

    &:hover {
        opacity: 0.5;
    }

    
`

export const Divisor = styled.div`
    background-color:var(--placeholder-and-separator);

    font-family: Roboto;

    width: 80px;
    height: 8px;
`

export const MovieList = styled.div`
    padding: 1em 0 0 1em ;
    display:flex;
    align-items: center;
    justify-content:flex-start;

    width: 100%;

    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar{
        display:none;
    }

    div:first-child{
        margin-left: 30px;
    }

    cursor: pointer;


    div {
        height: 220px;
        width: 150;
        margin-left: 10px;
  
        > img {
            height: 220px;
            width: 150;
        }
    }
`;

export const Header = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;

    margin: 0;
    padding: 0;

    z-index: 10;

    background-color: rgba(0, 0, 0, 0.5);

    display:flex;
    align-items: center;
    justify-content: space-around;

    height: 52px;
    width: 100vw;

    > .rotate{
        transition: transform 0.4s;
        transform: rotate(90deg);
    }

    > .notify{
        position: relative;

        display: block;

        &::after{
            display: flex;
            align-items: center;
            justify-content: center;

            background-color: var(--favorites-and-categories);
            color: var(--white); 

            position: absolute;
            top: calc(12px - 50%);
            left: 20px;

            width: 19px;
            height: 19px;

            border-radius: 50%;

            font-size: 0.6rem;

            content: '5+';
            z-index: 50;
        }
    }
`;
export const DivInput = styled.form`
    background-color: var(--secondary);

    display:flex;
    align-items:center;

    width:60%;
    height:32px;

    cursor:pointer;

    position: relative;

    > input{
        background-color:var(--secondary);
        color: var(--placeholder-and-separator);

        font-size: 1em;
        font-weight: bold;

        padding: 9px; 
        width: 100%;
        height: 32px;

        &::placeholder{
            color: #FCD0CD;
        }

        cursor:pointer;
    }

    > span{
        position: absolute;

        color: red;

        font-size: 14px;
        font-weight: bold;

        right: 56px;

        top: 32px;
    }

    > button{
        display:flex;
        align-items:center;
        justify-content:center;

        background-color: var(--button);

        width: 56px;
        height: 32px;

        cursor:pointer;

        &:hover {
            opacity: 0.5;
        }
    }
`;

export const HambuerguerMenuIcon = styled(Menu)`
    color: var(--title-and-input);

    transform: rotate(0deg);

    width: 30px;
    height: 30px;

    cursor:pointer;

    &:hover {
        opacity: 0.5;
    }
`
export const SearchIcon = styled(Search)` 
    color: var(--black);

    width: 18px;
    height: 18px;

    cursor: pointer;

`
export const HeartFavoriteIcon = styled(Heart)`
    position: relative;

    color: var(--title-and-input);

    width: 32px;
    height: 30px;

    position: relative;

    cursor:pointer;

    &:hover {
        opacity: 0.5;
    }

`

export const SideBarMenu = styled.div`
    background-color:var(--black);
    
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > .category{
        display:flex;
        align-items:center;
        justify-content:space-around;

        height: 20px;
        width:220px;

        cursor: pointer; 

        text-align: initial;

        &:active,
        &:hover{
            > div{
                background-color: var(--selected-category);
                width: 60px;
                height: 6px;

            }

            > span{
                color: #fff;
                font-size: 16px;
            }
            
        }


        > .selector-div{
            background-color: var(--favorites-and-categories);

            width: 50px; 
            height: 4px;

            margin-right: auto;
        }

        > span{
                color: var(--category);
                font-weight: bold;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.08em;

            }
    }

        
 
   
`;


