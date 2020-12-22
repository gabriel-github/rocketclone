import styled from "styled-components";
import { gray, pink, green, grayBrown } from "../Colors/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  position: relative;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60%;
    background-color: #000;
  }

  @media (max-width: 650px) {
    margin-top: 45rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 90%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .footer-sign-up {
    background-color: ${grayBrown};
    color: ${gray};
    width: 90%;
    height: 60%;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 4rem;
      padding-left: 4rem;

      span {
        color: ${green};
      }
    }

    div {
      margin-top: 1rem;
      padding-left: 4rem;
      width: 85%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        width: 50%;
        font-size: 1.2rem;
      }

      button {
        padding: 20px 30px;
        color: #fff;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 600;
        border-radius: 0.2rem;
        transition: all 0.3s ease-in;

        &:hover {
          background-color: ${pink};
          transform: translateY(-3px);
        }
      }
    }

    @media (max-width: 860px) {
      h1 {
        font-size: 3rem;
      }

      div {
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        p {
          width: 88%;
        }

        button {
          margin-top: 1rem;
          padding: 20px 50px;
        }
      }
    }

    @media (max-width: 650px) {
      h1 {
        font-size: 2rem;
      }

      div {
        p {
          width: 100%;
        }
      }
    }
  }


  
`;
