import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Content = styled.div`

  position: sticky;
  top: 0;
  width: 100%;
  max-width: 1300px;
  height: 80px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  a {
    text-decoration: none;
    font-family: 'Arial', sans-serif;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-left: .5rem;
  }
`;


export const Button = styled.button`
  background-color: #8257e6;
  padding: 10px 30px;
  color: #fff;
  border-radius: 0.2rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: #8257a2;
    transform: translateY(-3px);
  }
`;
