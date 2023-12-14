import styled from "styled-components";

export const Container = styled.div`
  textarea {
    width: 100%;
    padding: 0.8rem;

    border: none;
    border-radius: 0.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }
  ::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
