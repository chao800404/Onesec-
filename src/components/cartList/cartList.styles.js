/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const CartItemContainer = styled(motion.div)`
  width: 28rem;
  height: 35rem;
  background-color: #fff;
  filter: drop-shadow(0rem 0rem 0.4rem rgba(0, 0, 0, 0.5));
  position: absolute;
  top: -300%;
  left: -315%;
  z-index: 21;
  border-radius: 0.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4.5rem 4.5rem;
  padding: 1.5rem;
  grid-gap: 1rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 1.5rem;
    right: -2rem;
    width: 4rem;
    height: 4rem;
    background-color: #fff;
    z-index: 30;
    clip-path: polygon(100% 52%, 39% 0, 40% 100%);
  }
`;

export const CartTotal = styled.div`
  grid-row: 2/ 3;
  grid-column: 1/ -1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;

  h3 {
    font-size: 1.8rem;
    color: #161616;
    font-weight: 400;
  }

  span {
    font-size: 1.8rem;
    color: #161616;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

export const CartListItem = styled.div`
  grid-row: 1/ 2;
  grid-column: 1/ -1;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1.2rem;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: #161616;
  }
`;