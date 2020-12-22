import styled from "styled-components";
import { gray, pink, green, grayBrown } from "../Colors/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 85vh;
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

  @media (max-width: 1200px) {
    margin-top: 20rem;
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

  .footer-infos {
    width: 90%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;

        #logo {
          margin-left: 0.5rem;
        }
      }

      div {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        #facebook,
        #instagram,
        #twitter,
        #youtube {
          background-color: ${grayBrown};
          margin-left: 0.5rem;
          padding: 0.5rem;
          border-radius: 0.2rem;
        }
      }

      @media (max-width: 800px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

        div {
          width: 30%;
          margin-top: 0;
        }

        #facebook,
        #instagram,
        #twitter,
        #youtube {
          margin-top: 0.5rem;
        }
      }
    }

    .terms-of-use {
      padding-right: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      div a {
        margin-left: 0.5rem;
        text-decoration: none;
        color: ${gray};
        font-size: 1rem;
      }

      .boost-yourself {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 2rem;

        p {
          color: ${green};
          font-size: 1.1rem;
          margin-right: 0.8rem;
        }

        #arrow-up {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${grayBrown};
          text-align: center;
          padding: 0.5rem;
          border-radius: 0.2rem;
        }
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;

      .terms-content {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;

        a {
          margin-top: 0.7rem;
        }
      }

      .terms-of-use {
        width: 97%;

        .boost-yourself {
          justify-content: space-between;
        }
      }
    }
  }
`;
