import styled from "styled-components";
import { green, gray, darkGray, grayBrown, purple } from "../Colors/colors";

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

  .Reward-text {
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

  .Reward-card {
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .rewards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60%;
  }

  .reward-card-content {
    background-color: ${grayBrown};
    height: 70%;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1.5rem;

    h2 {
      font-size: 2rem;
      color: ${gray};
    }

    div {
      width: 16%;
      height: 25%;
      background-color: ${purple};
      border-radius: 100%;
    }

    h3 {
      font-size: 1.3rem;
      color: ${gray};
      margin-top: 1rem;
    }

    p {
      width: 70%;
      color: ${darkGray};
      font-size: 1rem;
      text-align: center;
      margin: 0.5rem;
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

    @media (max-width: 600px) {
        h2 {
            font-size: 1rem;
        }

        h3 {
            font-size: .8rem;
        }

        p {
            font-size: .5rem;
        }

      button {
        padding: 0.4rem 1rem;
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 80vh;
    padding: 0;
    margin-top: 5rem;
    margin-left: 5rem;
    align-items: flex-start;

    .Reward-card {
      width: 80%;
      height: 35rem;
      text-align: left;
    }

    .Reward-text {
      width: 80%;
      margin-top: 3rem;
    }
  }

  @media (max-width: 900px) {
    .Reward-card {
      width: 90%;
    }
  }

  @media (max-width: 700px) {
    .Reward-card {
      height: 25rem;
    }
  }
`;
