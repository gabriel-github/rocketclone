import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height:  50vh;
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
            background-color: #04d361;
            width: 3rem;
            height: .2rem;
        }


        h1 {
            font-size: 3.5rem;
            color: #e1e1e6;
            margin-top: 2.7rem;
        }

        p {
            font-size: 1.2rem;
            color: #a8a8b3;
            margin-top: 1rem;
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        height: 80vh;
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
            height: 25rem;
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
  padding: 2rem;

  .img {
      width: 40%;
      height: 28%;
      border-radius: 100%;
      background-color: #8257e6;
      padding: 1rem;
      border: 1px solid #5921dd;
  }

  h2 {
      color: #e1e1e6;
      margin-top: 1rem;
  }

  p {
      color: #a8a8b3;
      font-size: 1.1rem;
      margin-top: .5rem;
  }

  .icons {
      width: 70%;
      height: 20%;
      display: flex;
      padding: 1rem;
      justify-content: space-between;
      align-items: center;
  }

  button {
      text-align: center;
      color: #fff;
      padding: .8rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 0.3rem;
  }

  @media (max-width: 1200px) {
      .icons{
          width: 80%;
      }
  }

  @media (max-width: 600px) {
      .icons{
          width: 100%;
      }
  }
`;
