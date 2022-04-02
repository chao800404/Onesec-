/** @format */

import { Flex } from "../Flex/flex.styles";
import { Link } from "react-router-dom";
import { FooterContainer, FooterMenu, AuthorLink } from "./footer.styles";
import { ReactSVG } from "react-svg";
import onesecLogo from "../../assets/svg/onesec-logo.svg";
import { useSelector } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import { BsGithub, BsFacebook, BsMedium } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleCursorStyle } from "../../redux/cursor/cursor.actions";

const statement = `This page does not sell any products, it is a sample page, if you need
to buy it, Please go to <a style="color:#9b2226" href="https://www.oneseceyewear.com.tw">https://www.oneseceyewear.com.tw</a> <br/> In case of
any infringement, please contact yuho0298@gmail.com.<br/> Author - Chao,
2022 / 03 / 31`;

const Footer = () => {
  const theme = useSelector(selectThemeStyle);
  const dispatch = useDispatch();
  const hanleClickGithub = () => {
    window.open("https://github.com/chao800404", "_blank");
  };
  const hanleClickMedium = () => {
    window.open("https://medium.com/@a0921342997", "_blank");
  };

  const handleHover = () => {
    dispatch(toggleCursorStyle());
  };

  return (
    <Flex>
      <FooterContainer onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div>
          <p dangerouslySetInnerHTML={{ __html: statement }} />
          <AuthorLink>
            <BsGithub onClick={hanleClickGithub} />
            <BsFacebook />
            <BsMedium onClick={hanleClickMedium} />
          </AuthorLink>
        </div>
        <FooterMenu theme={theme}>
          <ReactSVG
            style={{ gridColumn: " 1 / -1", justifySelf: "end" }}
            src={onesecLogo}
          />
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/feature">Feature</Link>
          <Link to="/news">News</Link>
          <Link to="/virtual">Virtual</Link>
        </FooterMenu>
      </FooterContainer>
    </Flex>
  );
};

export default Footer;
