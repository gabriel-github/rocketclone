import styled from "styled-components";
import { gray } from "../Colors/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${gray};
  text-align: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: rgba(255, 255, 0, 0.15);
    box-shadow: 
    0 0 0 20px rgba(255, 255, 0, 0.2),
    0 0 0 40px rgba(255, 255, 0, 0.2), 
    0 0 0 60px rgba(255, 255, 0, 0.2);
  }

  h1 {
    margin-top: 5rem;
    font-size: 4rem;
  }

  p {
      color: ${gray};
      width: 50%;
      margin-top: 1.5rem;
      font-size: 1.2rem;
  }

  h4 {
      margin-top: 2rem;
      font-size: 1.3rem;
      color: yellow;
      text-transform: uppercase;
  }

  @media (max-width: 800px) {
    .icon {
      width: 4rem;
      height: 4rem;
    }

      h1 {
          font-size: 3rem;
      }

      p {
          width: 80%;
      }
  }
`;
