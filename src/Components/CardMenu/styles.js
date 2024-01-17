import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  margin-bottom: 1rem;
  border: #192227 solid 2px;

  width: 100%;

  .heartIcon {
    color: ${({ theme }) => theme.COLORS.REDBLOOD};
    display: flex;
    position: relative;

    margin-top: -1.2rem;

    top: 1.5rem;
    left: 11.5rem;
    font-size: 1.3rem;
  }

  > img,
  h1,
  p {
    margin-bottom: 1rem;
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
  width: 9rem;

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

  > button {
    width: 50%;
    height: 2rem;
    margin-top: 1.2rem;
  }
`;

export const RightContentCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5rem;

  width: 70%;

  > h1 {
    font-size: 1.3rem;
    text-align: center;
  }

  > p {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;

    height: 40%;
  }

  > div {
    display: flex;

    gap: 0.8rem;

    width: fit-content;
    height: 1.5rem;
    margin: 1rem auto 0;

    input {
      text-align: center;
      width: 2rem;
    }
    svg {
      font-size: 1.4rem;
    }
  }
  > button {
    width: 50%;
    height: 2rem;
    margin: 0.5rem auto;
  }
`;
