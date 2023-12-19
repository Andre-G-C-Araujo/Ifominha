import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    text-align: center;

    margin-bottom: -0.15rem;
    margin-right: 0.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
