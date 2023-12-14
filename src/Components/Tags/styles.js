import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1rem;
  padding: 0.5rem;

  max-height: 7rem; // aproximadamente.

  > span {
    width: fit-content;
    height: 2rem;

    padding: 0.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;
