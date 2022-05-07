/** @format */

import { motion } from "framer-motion";
import featureImg_1 from "../../assets/featurePhoto/feature_image_1.webp";
import featureImg_2 from "../../assets/featurePhoto/feature_image_2.webp";
import featureImg_3 from "../../assets/featurePhoto/feature_image_3.webp";
import {
  FeatureBannerContainer,
  FeatureBannerImgContainer,
  FeatureTitle,
  FeatureBannerOverFlow,
} from "./featureBanner.styles";

const FeatureBanner = ({ feature, onLoad }) => {
  return (
    <FeatureBannerContainer>
      <FeatureBannerOverFlow>
        <FeatureBannerImgContainer>
          <motion.img
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            src={featureImg_1}
            onLoad={onLoad}
          />
          <motion.img
            initial={{ y: 80 }}
            animate={{ y: 30 }}
            src={featureImg_2}
            onLoad={onLoad}
          />
          <motion.img
            initial={{ y: -80 }}
            animate={{ y: -20 }}
            src={featureImg_3}
            onLoad={onLoad}
          />
        </FeatureBannerImgContainer>
      </FeatureBannerOverFlow>

      <FeatureTitle>
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {feature.bannerStatement[0]}
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {feature.bannerStatement[1]}
        </motion.span>
      </FeatureTitle>
    </FeatureBannerContainer>
  );
};

export default FeatureBanner;