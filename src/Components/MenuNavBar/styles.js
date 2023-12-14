import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: left;
  gap: 0.5rem;

  height: 4.2rem;
  padding: 1.2rem;

  font-size: 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > p {
    font-size: 1.7rem;
  }
`;
