/** @format */

import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction || "row"};
  margin: 0 auto;
  align-items: center;
  width: 110rem;

  @media only screen and (max-width: 1450px) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 0 5rem;
  }
`;
