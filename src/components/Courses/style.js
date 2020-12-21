import styled from 'styled-components';
import { grayBrown, darkGray, green, gray } from '../Colors/colors'

export const Card = styled.div`
    width: 260px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
    background-color: ${grayBrown};
    margin: 1rem;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;

    .header-card {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        position: absolute;
        top: 0;

        .level { 
            padding: 5px;
            background-color: ${darkGray};
            color: #fff;
            border-radius: .2rem;
        }

        .level-number {
            font-size: 1rem;
            color: ${darkGray};
            opacity: 1;
        }
    }

    h1 {
        font-size: 3rem;
        color: ${gray};
        padding-left: 1rem;
    }

    h2 {
        margin-top: 1.2rem;
        font-size: 2.2rem;
        color: ${green};
        padding-left: 1rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: ${darkGray};
        padding-left: 1rem;
    }

`
