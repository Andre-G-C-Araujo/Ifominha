import styled from "styled-components";

export const Container = styled.button`
  width: 23rem;
  height: 3.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 0.3rem;

  > svg {
    font-size: 1.6rem;

    margin-bottom: -0.5rem;
    margin-right: 1rem;
  }
`;
