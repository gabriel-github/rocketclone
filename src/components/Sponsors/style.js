import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #e1e1e6;
  margin: 6rem 0;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        width: 40%;
        font-size: 2.5rem;
        text-align: center;
        height: 3rem;
        margin-top: 5rem;
        transition: all .6s ease-in;
    }

    div{
        width: 60%;
        display: flex;
        justify-content: space-around;
        margin-top: 8rem;
    }

    
    @media (max-width: 1000px) {
        h1{
            width: 50%;
        }
    }

    @media (max-width: 800px) {
        h1{
            width: 60%;
        }
    }

    @media (max-width: 650px) {
        h1{
            width: 80%;
        }
    }
`



