/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import primaryColor from "../../theme/priamry.styles";

export const HeaderNav = styled(motion.header)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 15rem;
  will-change: transform;
  z-index: 100;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: ${primaryColor["logoPointColor"]};
    display: block;
    margin: 0 3px;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 2.2rem;
  font-weigth: 1200;
  color: inherit;
`;
