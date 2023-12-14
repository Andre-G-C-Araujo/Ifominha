import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  margin-top: 0.5rem;
  border-radius: 0.6rem;
  padding: 0.5rem;
`;
