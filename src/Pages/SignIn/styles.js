import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  place-content: center;

  height: 100vh;

  > a {
    margin-top: 2.8rem;
    font-size: 1.2rem;

    text-align: center;
  }

  @media (max-width: 550px) {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    padding: 2rem 6.5 2rem 5.5rem;
  }
`;

export const Branch = styled.div`
  display: flex;
  gap: 1.1rem;
  height: 3.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    height: 3.2rem;
    background-color: transparent;
    padding: 0.1rem;
  }

  > h1 {
    margin: auto 0;
    font-size: 2.6rem;
  }

  margin-bottom: 6.4rem;
`;

export const Form = styled.form`
  > div {
    margin: 1rem 0;
    label {
      input {
        padding-left: 3rem;
      }
    }
  }
`;
