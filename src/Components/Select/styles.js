import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  select {
    width: 100%;
    padding: 1.1rem;

    margin-top: 0.3rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border-radius: 0.6rem;
    font-size: 1rem;
  }
`;
