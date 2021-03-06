/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const CheckoutPageContainer = styled.section`
  min-height: 100vh;
  padding: 20rem 0;

  @media only screen and (max-width: ${maxWidth.small}) {
    padding: 10rem 0;
  }
`;

export const CheckoutContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  grid-gap: 2rem;

  span {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 1fr;
  }
`;

export const CheckoutSignIn = styled.div`
  grid-column: 1 / -1;
  display: flex;
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 3rem;
  gap: 1rem;
  align-items: center;
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: ${maxWidth.small}) {
    flex-direction: column;
  }

  span {
    flex: 3;
    color: #161616;
  }
  button {
    flex: 0.8;
    letter-spacing: 0.1rem;
  }
`;

export const CheckoutListContainer = styled.div`
  grid-column: 1 /2;
  display: grid;
  grid-template-columns: 2rem repeat(5, 1fr) 6rem 2rem;
  grid-gap: 2.5rem 1rem;
  h1,
  p {
    grid-column: 1 / -1;
  }

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 2rem repeat(5, 1fr) 2rem;
    h1 {
      font-size: 3rem;
    }
    p {
      opacity: 0.8;
    }
  }
`;

export const CheckoutPament = styled.div`
  grid-column: 2 / 3;
  background-color: #fff;
  align-self: start;
  position: sticky;
  top: 5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: ${maxWidth.small}) {
    grid-column: 1 / -1;
  }
`;

export const CheckoutHeader = styled.div`
  grid-column: 1 / -1;
  border-top: 0.5px solid #fff;
  border-bottom: 0.5px solid #fff;
  padding: 2rem 0;
  grid-template-columns: inherit;
  display: inherit;
  grid-column-gap: inherit;
  span {
    letter-spacing: 0.1rem;
    text-align: center;
    &:nth-child(1) {
      grid-column: 2/3;
    }
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    display: none;
  }
`;
