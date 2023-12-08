import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  height: 100%;
`;

export const AdvertisingContent = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  height: 7.5rem;

  margin: 2.5rem 1rem 2.5rem 2rem;

  border-radius: 0.4rem;
  background: linear-gradient(${({ theme }) => theme.COLORS.GRADIENT_200});

  > div {
    display: flex;
    flex-direction: column;

    height: 5rem;
    width: 63%;

    justify-content: start;

    color: white;

    > h1 {
      font-size: 1.2rem;
      line-height: 2rem;
    }

    > p {
      font-size: 0.8rem;
    }
  }
  > img {
    position: absolute;

    left: 0.3rem;
  }
`;
