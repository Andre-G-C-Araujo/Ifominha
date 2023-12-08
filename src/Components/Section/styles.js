import styled from "styled-components";

export const Container = styled.section`
  margin: 1.5rem 0 0 1rem;

  color: white;

  > h1 {
    margin-bottom: 0.75rem;
  }
`;

export const ContentScrollY = styled.div`
  display: flex;

  gap: 0.8rem;

  overflow-x: auto;
  scroll-behavior: smooth;
`;
