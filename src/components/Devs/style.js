import styled from "styled-components";
import { green, gray, darkGray, grayBrown } from "../Colors/colors";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 20rem 0;
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

  .Dev-text {
    width: 47%;

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

  .Dev-card {
    display: flex;
    width: 40%;
    height: 70%;
    justify-content: center;
    align-items: center;
    background-color: ${grayBrown};
    border-radius: .5rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    height: 80vh;
    padding: 0;
    margin-top: 5rem;
    margin-left: 5rem;
    align-items: flex-start;

    .Dev-card {
      margin-top: 1rem;
    }

    .Dev-text {
      width: 80%;
      margin-top: 3rem;
    }
  }

  @media (max-width: 1000px) {
    .Dev-card {
      width: 70%;
      height: 60%;
    }
  }

  @media (max-width: 900px) {
    .Dev-card {
      width: 70%;
      height: 60%;
    }
  }

  @media (max-width: 700px) {
    .Dev-card {
      height: 40%;
    }
  }
`;
