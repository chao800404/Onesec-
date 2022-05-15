/** @format */
import { Flex } from "../../components/Flex/flex.styles";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { ReactSVG } from "react-svg";
import {
  FeatureContainer,
  FeatureStory,
  FeatureContent,
  FeatureImgContainer,
  FeatureGlassesBtn,
  ProofIconContainer,
  FeatureFunction,
  FeatureStoryContainer,
  FeatureStoryBtnContainer,
  FeatureFunctionContainer,
  FeatureGlassesContainer,
} from "./featurePage.styles";
import {
  BsArrowRightSquareFill,
  BsArrowLeftSquareFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import featureImg from "../../assets/featurePhoto/feature_image_4.webp";
import { imgArr, imgArr1 } from "./featurePage.data";
import { useSelector, useDispatch } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import { fetchFeatureStart } from "../../redux/featuresPage/feature.action";
import { featurePageData } from "../../redux/featuresPage/feature.select";
import FeatureBanner from "../../components/featureBanner/featureBanner.component";

const FeaturePage = () => {
  const [inView, setInView] = useState(0);
  const [displayProperty, setDisplayProperty] = useState(0);
  const featureBtnContainer = useRef();
  const theme = useSelector(selectThemeStyle);
  const dispatch = useDispatch();
  const feature = useSelector(featurePageData);

  useEffect(() => {
    dispatch(fetchFeatureStart());
  }, [dispatch]);

  const increment = useCallback((btnType) => {
    if (!imgArr || !imgArr1) return;
    btnType.dataset.type === "leftArrow"
      ? setInView((prev) => {
          if (prev <= 0) return (prev = 0);
          return (prev = prev - 1);
        })
      : setInView((prev) => {
          if (prev >= imgArr?.length - 1) return (prev = imgArr?.length - 1);
          return (prev = prev + 1);
        });
  }, []);

  const handleClick = (e) => {
    const btnType = e.target.closest("span");
    if (!btnType) return;
    increment(btnType);
  };

  const handleGlassesFeatureDisplay = (e) => {
    const glassesBtn = e.target.closest("[data-type]");
    if (!glassesBtn) return;
    const index = +glassesBtn.dataset.type.split("-")[1];
    setDisplayProperty((prev) => (prev = index));
  };

  useEffect(() => {
    if (!feature || !imgArr || !imgArr1) return;
    const btnContainer = featureBtnContainer.current;
    [...btnContainer.children].forEach((dom) =>
      dom?.children[0]?.classList.remove("visible")
    );
    const btnContent = btnContainer.children?.[displayProperty].children?.[0];
    btnContent?.classList.add("visible");
  }, [displayProperty, feature]);

  return (
    <FeatureContainer>
      <Flex style={{ flexDirection: "column" }}>
        {feature && imgArr && imgArr1 && (
          <>
            <FeatureBanner feature={feature} />
            <FeatureStory>
              <FeatureStoryContainer>
                <FeatureContent>
                  <h3>{feature["story"]["title"]}</h3>
                  <p>{feature["story"][inView]}</p>
                  <FeatureStoryBtnContainer onClick={handleClick}>
                    <motion.span
                      style={{ display: "block", width: "4.5rem" }}
                      whileTap={{ x: -2, scale: 0.95 }}
                      data-type="leftArrow"
                    >
                      <BsArrowLeftSquareFill style={{ width: "100%" }} />
                    </motion.span>
                    <motion.span
                      style={{ display: "block", width: "4.5rem" }}
                      whileTap={{ x: 2, scale: 0.95 }}
                      data-type="rightArrow"
                    >
                      <BsArrowRightSquareFill />
                    </motion.span>
                  </FeatureStoryBtnContainer>
                </FeatureContent>
                <FeatureImgContainer>
                  <span>{imgArr[inView]["status"]}</span>
                  <img alt="glasses-filter" src={imgArr[inView]["img"]} />
                </FeatureImgContainer>
              </FeatureStoryContainer>
              {imgArr.map((_, index) => (
                <motion.div
                  key={index}
                  style={{
                    gridColumn: "1 / -1",
                  }}
                  data-item={index}
                  onViewportEnter={() => setInView((prev) => (prev = index))}
                  viewport={{ amount: 0.5 }}
                />
              ))}
            </FeatureStory>
            <FeatureFunction>
              <h4>{feature["function"][0]}</h4>
              <FeatureFunctionContainer>
                <div>
                  {imgArr1.map((data, index) => (
                    <ProofIconContainer key={index}>
                      <ReactSVG
                        className="proof_icon"
                        src={data["img"]}
                        beforeInjection={(svg) =>
                          svg.setAttribute(
                            "style",
                            `font-size:10rem; 
                            display:flex; 
                            align-items:center;
                            justify-content:center;
                            fill:${theme.color};
                            pointer-events:none;
                            `
                          )
                        }
                      />
                      <span>{data["statement"]}</span>
                    </ProofIconContainer>
                  ))}
                </div>
                <FeatureGlassesContainer
                  onClick={handleGlassesFeatureDisplay}
                  ref={featureBtnContainer}
                >
                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-0"
                  >
                    <span className="function-desc-1">
                      {feature["property"][0]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>
                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-1"
                  >
                    <span className="function-desc-2">
                      {feature?.["property"][1]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>
                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-2"
                  >
                    <span className="function-desc-3">
                      {feature["property"][2]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>

                  <img alt="glasses" src={featureImg} />
                </FeatureGlassesContainer>
              </FeatureFunctionContainer>
            </FeatureFunction>
          </>
        )}
      </Flex>
    </FeatureContainer>
  );
};

export default FeaturePage;
