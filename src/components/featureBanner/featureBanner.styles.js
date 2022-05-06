/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";
import { motion } from "framer-motion";

export const FeatureBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: auto;
`;

export const FeatureBannerOverFlow = styled.div`
  @media only screen and (max-width: ${maxWidth.small}) {
    overflow-x: scroll;
    height: 87rem;
  }
`;

export const FeatureTitle = styled.div`
  letter-spacing: 0.1rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 200%;
  text-align: center;
  transform: translateX(-50%);
  text-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);

  h1 {
    font-size: calc(5rem + 4vw);
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    width: 90%;
    bottom: 20%;
    font-size: 1.8rem;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.6);
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    h1 {
      font-size: 3rem;
    }
  }
`;

export const FeatureBannerImgContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  min-height: calc(100vh - 40rem);
`;
