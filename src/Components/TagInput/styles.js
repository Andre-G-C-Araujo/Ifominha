import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 41%;

  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > input,
  button {
    height: 1.8rem;
    border: none;
    background-color: ${({ theme, isnew }) =>
      isnew ? "transparent" : theme.COLORS.LIGHT_600};
    padding: 0 0.5rem;
  }

  border-radius: 0.6rem;
  border: ${({ theme, isnew }) =>
    isnew ? `${theme.COLORS.LIGHT_600} dashed 2px` : "none"};

  > input {
    width: 100%;
    border-bottom-left-radius: 0.6rem;
    border-top-left-radius: 0.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-size: 1rem;
  }

  > button {
    width: 1.8rem;

    font-size: 0.6rem;

    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;

    > svg {
      font-size: 1rem;
      color: ${({ theme, isnew }) =>
        isnew ? theme.COLORS.LIGHT_100 : theme.COLORS.REDBLOOD};
    }
  }
`;
