/** @format */

import { useSelector } from "react-redux";
import { Flex } from "./flex.styles";
import { selectThemeStyle } from "../../redux/theme/theme.select";

const FlexLayout = ({ children, direction, style }) => {
  const theme = useSelector(selectThemeStyle);
  return (
    <Flex theme={theme} direction={direction} style={style}>
      {children}
    </Flex>
  );
};

export default FlexLayout;
