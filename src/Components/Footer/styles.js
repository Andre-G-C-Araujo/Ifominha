import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  height: 3.5rem;
  width: 100%;

  > div {
    display: flex;
    gap: 0.2rem;
    > img {
      width: 1rem;
      background-color: transparent;
    }

    > h1 {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > p {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;
