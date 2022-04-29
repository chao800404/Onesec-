/** @format */
import {
  AboutUsPageContainer,
  AboutStatement,
  AboutStory,
  AboutStoryDescription,
  AboutStorySketch,
  AboutStorySketchs,
  AboutJointDescription,
} from "./aboutPage.styles";
import { useEffect, useState, useRef, useCallback } from "react";
import aboutBanner from "../../assets/aboutPhoto/about-us-Banner.webp";
import aboutTitle from "../../assets/aboutPhoto/about-us-title.webp";
import { Flex } from "../../components/Flex/flex.styles";
import BasicBanner from "../../components/basicBanner/basicBanner.component";
import glassesSketch from "../../assets/aboutPhoto/glasses- sketch.webp";
import glassesSketch_1 from "../../assets/aboutPhoto/glasses-sketch-1.webp";
import about from "./about-data";
import FirmLogoContent from "../../components/firmLogo/firmLogo.component";

const AboutPage = () => {
  const theGlassesSketch = useRef();
  const [touchImageBounding, setTouchImageBounding] = useState(false);

  const bounding = useCallback((event) => {
    const imgRect = theGlassesSketch.current.getBoundingClientRect();
    const { top, height } = imgRect;
    if (top > height) return;
    top <= 0
      ? setTouchImageBounding((prev) => (prev = true))
      : setTouchImageBounding((prev) => (prev = false));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", bounding);

    return () => window.removeEventListener("scroll", bounding);
  }, [bounding]);

  return (
    <AboutUsPageContainer>
      <BasicBanner
        img={aboutBanner}
        title={aboutTitle}
        txt={about["bannerStatement"]}
      />
      <Flex style={{ flexDirection: "column" }}>
        <AboutStatement
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1 }}
        >
          <span>{about["statement"][0]}</span>
          <h3>{about["statement"][1]}</h3>
        </AboutStatement>

        <AboutStory>
          <AboutStoryDescription
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3, once: true }}
          >
            <h2>{about["story"]["title"]}</h2>
            <p>{about["story"]["description"][0]}</p>
            <p>{about["story"]["description"][1]}</p>
          </AboutStoryDescription>
          <AboutStorySketch
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
            alt="glasses-sketch"
            src={glassesSketch}
          />
          <AboutStorySketchs
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
            alt="glasses-sketch"
            src={glassesSketch_1}
            ref={theGlassesSketch}
          />

          <AboutJointDescription
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: true }}
          >
            <h2>{about["joint"]["title"]}</h2>
            <p>{about["joint"]["description"][touchImageBounding ? 1 : 0]}</p>
          </AboutJointDescription>
        </AboutStory>
        <div style={{ width: "100%", overflow: "hidden", display: "flex" }}>
          <FirmLogoContent />
          <FirmLogoContent />
        </div>
      </Flex>
    </AboutUsPageContainer>
  );
};

export default AboutPage;
