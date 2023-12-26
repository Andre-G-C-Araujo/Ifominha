import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  position: relative;

  height: 100vh;

  > footer {
    position: absolute;
    bottom: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem 3rem;
  height: 80%;

  padding: 1rem;

  > img {
    width: 13rem;
    height: 13rem;

    margin: 1rem auto;

    border-radius: 50%;
  }

  > button {
    margin: 0 auto;

    width: 80%;
  }

  > a {
    font-size: 1.3rem;
  }
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  text-align: center;

  > h1 {
    font-size: 1.8rem;
    line-height: 2rem;

    margin-top: 1rem;
    text-align: center;
  }
`;

export const TagContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  width: 100%;

  gap: 1rem;
  padding: 0.5rem;
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 1rem;

  align-self: bottom;
  margin: auto 0;

  align-items: center;
  justify-content: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 2.5rem;

    width: 50%;
    > svg {
      font-size: 1.8rem;
    }

    > input {
      width: 2rem;

      font-size: 1.3rem;

      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      border: none;
    }
  }
`;
