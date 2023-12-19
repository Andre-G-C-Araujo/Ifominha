import styled from "styled-components";

export const Heading = styled.header`
  display: flex;
  flex-direction: column;

  font-size: 0.8rem;

  img {
    width: 70%; // esse tamanho mesmo?

    margin: 1rem auto;
    display: none;

    border-radius: 50%;
  }
`;

export const Container = styled.div`
  font-family: "Roboto", sans-serif;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  position: relative;

  height: 100vh;

  > footer {
    position: absolute;
    bottom: 0;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  overflow-y: auto;

  margin: 0.5rem 2rem 2rem;
  max-height: 80%;

  padding: 1rem;

  > a {
    font-size: 1rem;
  }

  > div:nth-child(2) {
    label {
      input {
        font-size: 0.6rem;
      }
    }
  }

  > div {
    label {
      input {
        width: 100%;

        margin: 0;
      }
    }
  }
  > button {
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`;