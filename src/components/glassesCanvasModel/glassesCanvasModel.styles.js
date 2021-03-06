/** @format */

import styled from "styled-components";

import { motion } from "framer-motion";

export const ClassesModelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  .vr {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 100 !important;
    top: 0;
    left: 0;
    transform: unset !important;
  }
`;

export const SvgIcon = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
`;
