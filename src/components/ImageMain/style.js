import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
  transition: all .3s ease-in;

`;

export const Content = styled.div`
  position: relative;
  width: 90%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in;

  @media (max-width: 900px) {
    height: 80%;
  }

  @media (max-width: 620px) {
    height: 45%;
  }
`;

export const Background = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Background-1 {
    width: 70%;
    height: 400px;
    background-color: #8257e6;
    color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px #5921dd, 0 0 40px #5921dd, 0 0 80px #5921dd,
      0 0 160px #5921dd;
      transition: all .3s ease-in;
  }

  .Background-2 {
    width: 25%;
    height: 400px;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px #5921dd, 0 0 40px #5921dd, 0 0 80px #5921dd,
      0 0 160px #5921dd;
      transition: all .3s ease-in;
  }

  @media (max-width: 900px) {
    .Background-1 {
      height: 300px;
    }

    .Background-2 {
      height: 300px;
    }
  }

  @media (max-width: 620px) {
    .Background-1 {
      height: 200px;
    }

    .Background-2 {
      height: 200px;
    }
  }
`;

export const Center = styled.div`
  position: absolute;
  bottom: 0;
  left: auto;
  right: auto;
  width: 25%;
  height: 12%;
  background-color: #141414;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
`;

export const Left = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20%;
  height: 60%;
  background-color: #141414;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
`;
export const Right = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20%;
  height: 40%;
  background-color: #141414;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
`;
