import styled from "styled-components";

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
    width: fit-content;
  }

  > div {
    label {
      input {
        margin: 0;
      }
    }
  }

  //Spacing input
  > div:nth-child(3) {
    label {
      input {
        margin-top: 1rem;
      }
    }
  }

  > div:nth-child(4) {
    label {
      input {
        margin-bottom: 1.5rem;
      }
    }
  }

  > button {
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`;
