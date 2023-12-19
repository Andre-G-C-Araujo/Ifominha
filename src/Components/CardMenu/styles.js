import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  margin-bottom: 1rem;
  border: #192227 solid 2px;

  width: 100%;

  svg {
    position: relative;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.3rem;

    top: 0rem;
    left: 5.5rem;
  }

  .heartIcon {
    color: ${({ theme }) => theme.COLORS.REDBLOOD};
  }

  > img,
  h1,
  p {
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
    input {
      width: 1.5rem;

      text-align: center;
    }
  }

  button {
    width: 100%;
  }
`;

export const LeftContentCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 0;

  border-right: ${({ theme }) => `${theme.COLORS.DARK_1000} solid 2px;`};

  align-items: center;
  max-width: 40%;

  > img,
  h1,
  p {
    margin-bottom: 0.75rem;
    text-align: center;
  }

  > img {
    width: 5rem;
    height: 5rem;

    border-radius: 50%;
    border: red solid 1px;
  }
  > h1 {
    font-size: 1rem;
  }
  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;

export const RightContentCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5rem;

  align-items: center;
  width: 60%;

  > h1 {
    font-size: 1.2rem;
    text-align: center;
  }

  > button {
    width: 50%;
    height: 2rem;
    margin-top: 0.5rem;
  }
`;
