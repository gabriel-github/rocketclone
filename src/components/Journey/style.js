import styled from "styled-components";
import { gray, darkGray } from "../Colors/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  
  @media (max-width: 1245px) {
    padding-bottom: 10rem;
  }

  @media (max-width: 650px) {
    padding-bottom: 14rem;
  }

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

  .journey-text { 
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0 5rem;

      h1 { 
          text-align: left;
          font-size: 4rem;
          color: ${gray};
      }

      p {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: ${darkGray};
          text-align: left;
      }

      @media (max-width: 1000px) {
        h1 {
          font-size: 2.6rem;
        }
      }
  }

  .journey-cards {
      margin-top: 4rem;
      display: flex;
      width: 95%;
      height: 60%;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
  }
`