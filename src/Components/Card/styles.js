import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-width: 11rem; // talvez maior?
  height: 16rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  padding: 1rem;
  border-radius: 0.3rem;
  border: 2px solid #000;

  .heartIcon {
    position: absolute;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.3rem;

    top: 0.75rem;
    right: 0.75rem;
  }

  > img,
  h1,
  p,
  input {
    margin-bottom: 0.75rem;
  }

  > img {
    width: 5rem;
    height: 5rem;

    border-radius: 50%;
  }
  > h1 {
    font-size: 1rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .counterInput {
    display: flex;

    gap: 1rem;
    > input {
      width: 1.5rem;

      text-align: center;
    }
  }

  > button {
    width: 100%;
  }
`;
