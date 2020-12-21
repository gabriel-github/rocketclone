import styled from "styled-components";
import { green, gray, darkGray, purple, purpleDark } from "../Colors/colors";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 20rem 0;
  }

  @media (max-width: 700px) {
    margin: 10rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  .conection-card {
    display: flex;
    width: 55%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .conection-text {
    width: 38%;

    div {
      background-color: ${green};
      width: 3rem;
      height: 0.2rem;
    }

    h1 {
      font-size: 3.5rem;
      color: ${gray};
      margin-top: 2.7rem;
    }

    p {
      font-size: 1.2rem;
      color: ${darkGray};
      margin-top: 1rem;
    }

    
    @media (max-width: 1200px){
      h1 {
        font-size: 2.5rem;
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    height: 100%;
    padding: 0;
    margin-top: 5rem;
    margin-left: 5rem;
    align-items: flex-start;

    .conection-card {
      width: 80%;
      height: 35rem;
      text-align: left;
    }

    .conection-text {
      width: 80%;
      margin-top: 3rem;
    }
  }

  @media (max-width: 900px) {
    .conection-card {
      width: 90%;
    }
  }

  @media (max-width: 700px) {
    .conection-card {
      height: 20rem;
    }
  }
`;

export const Card = styled.div`
  width: 47%;
  height: 90%;
  background-color: #29292e;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .img {
    width: 40%;
    height: 28%;
    border-radius: 100%;
    background-color: ${purple};
    padding: 1rem;
    border: 1px solid ${purpleDark};
  }

  h2 {
    color: ${gray};
    margin-top: 1rem;
  }

  p {
    color: ${darkGray};
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }

  .icons {
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    text-align: center;
    color: #fff;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.3rem;
  }

  @media (max-width: 1200px) {
    button {
      padding: 0.4rem 1rem;
    }
  }

  @media (max-width: 1000px) {
    .icons {
      width: 50%;
    }
  }

  @media (max-width: 700px) {
    .img {
      width: 30%;
      height: 25%;
    }
    .icons {
      width: 70%;
    }

    button {
      padding: 0.4rem 1rem;
    }
  }
`;
