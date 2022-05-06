/** @format */

import {
  AboutBanner,
  AboutTitle,
  AboutBannerTxt1,
  AboutBannerTxt2,
  AboutBannerBG,
} from "./baiscBanner.styles";
import useWinowSize from "../../utils/useWindowSize";

const BasicBanner = ({ img, title, txt, onLoad }) => {
  const { height } = useWinowSize();

  return (
    <AboutBanner
      height={height}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
    >
      <AboutBannerBG onLoad={onLoad} alt="about-banner" src={img} />
      <AboutTitle
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        alt="about-title"
        src={title}
      />
      <AboutBannerTxt1
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        ELECTROCHROMISM
      </AboutBannerTxt1>
      <AboutBannerTxt2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {txt}
      </AboutBannerTxt2>
    </AboutBanner>
  );
};

export default BasicBanner;
