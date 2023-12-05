import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  > label {
    display: flex;
    flex-direction: column;

    > input {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      width: 23rem;
      height: 3.2rem;

      border: none;
      border-radius: 0.6rem;

      padding: 1.2rem 1rem;
      margin: 0.3rem 0 3rem;

      ::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;
