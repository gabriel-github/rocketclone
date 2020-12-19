import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e1e1e6;
  text-align: center;

  h1 {
    width: 65%;
    font-size: 5rem;
    text-align: center;
    transition: all .3s ease-in;
  }

  b{
    color: #04d361;
  }

  @media (max-width: 1000px) {
    h1{
      font-size: 3rem;
    }
  }

  @media (max-width: 620px) {
    h1{
      font-size: 2rem;
    }
  }
`;

export const ButtonSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e1e1e6;
  margin-top: 2rem;
  transition: all .3s ease-in;

  p{
      font-size: 18px;
      font-weight: 600;
      width: 50%;
      text-align: right;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    p {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;

export const Button = styled.button`
    padding: 20px 30px;
    border-radius: .2rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;

    transition: all .3s ease-in-out;

    &:hover {
    background-color: #8257a2;
    transform: translateY(-3px);
    }
`;
