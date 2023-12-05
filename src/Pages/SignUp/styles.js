import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  place-content: center;

  height: 100vh;

  > a {
    margin-top: 2rem;
    font-size: 1.2rem;

    text-align: center;
  }

  @media (max-width: 550px) {
    background: ${({ theme }) => theme.COLORS.DARK_400};
  }
`;

export const Branch = styled.div`
  display: flex;
  gap: 1.1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    background-color: transparent;
    padding: 0.1rem;
  }

  > h1 {
    font-size: 2.6rem;
  }

  margin-bottom: 5.4rem;
`;

export const Form = styled.form``;
