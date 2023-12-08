import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  /* position: absolute; */

  justify-content: space-between;

  padding: 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  width: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  > svg {
    font-size: 1.5rem;
    margin: auto 0;
  }
  > span {
    position: absolute;
    right: 0.8rem;
    top: 0.7rem;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    text-align: center;

    background-color: red;
  }

  > .icon {
    font-size: 2rem;
  }
`;

export const Branch = styled.div`
  display: flex;
  gap: 1rem;

  > h1 {
    margin: auto;
    font-size: 1.5rem;
  }
  > img {
    height: 2rem;
  }
`;
