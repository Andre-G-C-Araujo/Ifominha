import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 0.8rem;

  img {
    width: 50%;

    margin: 1rem auto;

    border-radius: 50%;
  }

  label {
    align-self: center;

    margin-left: 8rem;
    margin-top: -3.5rem;

    width: fit-content;
    padding: 0.3rem;

    border-radius: 9999px;
    border: ${({ theme }) => `${theme.COLORS.LIGHT_600} dashed 2px`};

    input {
      display: none;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }
  }
`;
