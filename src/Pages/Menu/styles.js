import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: white;

  height: 100vh;
`;
export const SearchContent = styled.div`
  /* border: red solid 1px; */

  height: 85%;

  padding: 1rem 0rem;
  margin: 1.2rem 1rem;

  > button {
    width: 100%;

    font-size: 1.25rem;
    text-align: left;

    padding: 0.5rem;

    border-bottom: ${({ theme }) => `${theme.COLORS.DARK_1000} solid 1px;`};

    background-color: transparent;
  }

  > div {
    margin-bottom: 1rem;
  }
`;

export const ContentCards = styled.div`
  --mixHeightContentMobile: 26rem;
  // border: "red solid 1px",

  display: flex;
  flex-wrap: wrap;

  max-height: var(--mixHeightContentMobile);

  margin-bottom: 1rem;
  @media (max-height: 750px) {
    --mixHeightContentMobile: 17rem;
  }

  overflow-x: auto;
`;
