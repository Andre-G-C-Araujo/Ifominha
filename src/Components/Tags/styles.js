import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: 2rem;
  display: flex;

  padding: 0.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
