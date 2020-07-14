import styled from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material-sharp';
import { Star } from 'styled-icons/boxicons-solid';

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

        h3{
            margin-bottom: 7px;
        }

        h4{
            a{
                text-decoration: none;
            }
        }

    > .background{

        display:flex;
        align-items:flex-end;

        background-size:cover;
        background-position:center;

        border-radius: 0px 0px 50px 50px;

        width:100%;
        height:45vh;
        margin-bottom:25px;

      
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

`;

export const Divisor = styled.div`
    width: 5px;
    height: 40px;
    background: #C4C4C4;
`;

export const StarCount = styled(Star)`
    width: 13px;
    height: 12px;
    color: #EFFF37;
`;

export const ArrowLeft = styled(KeyboardArrowLeft)`
    height: 40px;
    width: 42px;
`;

export const Popularity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div{
        display: flex;
        align-items: center;

        svg{
            margin-left: 4px;
        }
    }
`;
export const Informations = styled.div`
    margin-top: 7px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > span{
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.08em;
    }

    >div small{
        color: #C8C8C8;
    }

    > div {
        display: flex;
        flex-direction: column;
    }
`;
export const Description = styled.div`
    margin-top: 7px;

    h2{
        margin-bottom: 7px;
    }
`;
export const Genres = styled.div`

    margin: 7px 0;

    h2{
        margin: 7px 0;
    }    

    > span {

        & + span{
            margin-left: 20px;
        }

        
    }
`;
export const Companies = styled.div`
    display:flex;
    align-items: center;
    justify-content:flex-start;

    width: 100%;

    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar{
        display:none;
    }

    > div{
        display: flex;
        flex-direction: column;

        > img{
            width: 80px;
            height: 50px;

            object-fit: fill;
        }

        height: 100px;
    }

    > div {

    img {
        margin-bottom: 7px;
    }

    span{
        font-size: 14px;
    }

    & + div{
        margin-left: 20px;
    }


}

`;