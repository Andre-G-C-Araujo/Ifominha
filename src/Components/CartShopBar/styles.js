import styled from "styled-components";

export const Container = styled.div`
  > div {
    position: absolute;
    z-index: 1;
    height: 85vh;

    right: 100%;
    margin-top: 1.3rem;
    left: 0;
    transition: right 2s;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: ${({ theme }) => `${theme.COLORS.DARK_400} solid 2px`};

    button {
      opacity: 0;
      height: 5rem;
      display: none;

      align-items: center;

      justify-content: center;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border: ${({ theme }) => `${theme.COLORS.DARK_400} solid 1px`};
    }

    a {
      display: flex;
      justify-content: center;

      position: relative;
      top: 20%;

      font-size: 1.4rem;

      opacity: 0;
    }
  }

  > svg {
    margin-top: 0.1rem;
    font-size: 1.5rem;
    margin: auto;
  }

  .show {
    right: 50%;

    > button {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: ${({ theme }) => `${theme.COLORS.DARK_400} solid 2px`};
      display: flex;
      font-size: 1.5rem;
      width: 100%;
      opacity: 1;
      transition: opacity 2.5s;
    }

    > a {
      transition: opacity 2.5s;
      opacity: 1;
    }
  }
`;

/*import styled from "styled-components";

export const Container = styled.div`
  > div {
    position: absolute;
    z-index: 1;
    height: 100vh;

    right: 100%;
    margin-top: 1.3rem;
    left: 0;
    transition: right 2s;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: ${({ theme }) => `${theme.COLORS.DARK_400} solid 2px`};

    a {
      opacity: 0;
      height: 5rem;

      align-items: center;

      justify-content: center;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border: ${({ theme }) => `${theme.COLORS.DARK_400} solid 1px`};
    }
  }

  > svg {
    margin-top: 0.1rem;
    font-size: 1.5rem;
    margin: auto;
  }

  .show {
    right: 50%;

    > a {
      display: flex;
      font-size: 1.5rem;
      opacity: 1;
      transition: opacity 2.5s;
    }
  }
`;
 */
