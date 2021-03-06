/** @format */

import sidebarData from "./sidebar.data.js";
import { SidebarContainer, Sidebar, SidebarImage } from "./sidebar.styles";
import SidebarItemLi from "../siderbar-item/sidebar-item.component.js";
import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { AnimatePresence } from "framer-motion";
import {
  toggleSidebar,
  sidebarAnEnd,
} from "../../redux/sidebar/sidebar.actions";

const sidebarImage = async (index) => {
  if (index) {
    const image = await import(
      `../../assets/homePhoto/homePhoto__${index}.webp`
    );
    if (image) return image;
  }

  return import(`../../assets/homePhoto/homePhoto__aboutus.webp`);
};

const Sidebars = () => {
  const status = useSelector(sidebarStauts);
  const [imageUrl, setImageUrl] = useState();
  const [imageName, setImageName] = useState("aboutus");
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [status]);

  useEffect(() => {
    if (imageName)
      sidebarImage(imageName)
        .then((data) => data.default)
        .then((path) => setImageUrl(path));
  }, [imageName]);

  const handleMouseEnter = (e) => {
    const target = e.target.closest("a");
    if (!target) return;
    const image = target.dataset.target;
    setImageName(image.split(" ").join(""));
  };

  const handleClick = (e) => {
    const target = e.target.closest("div");
    if (!target) return;
    dispatch(toggleSidebar());
  };

  return (
    <AnimatePresence
      onExitComplete={() => dispatch(sidebarAnEnd(true))}
      initial={false}
    >
      {status && (
        <SidebarContainer
          initial={{ scaleX: 0.2, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          exit={{
            x: -2000,
            opacity: 0,
            transition: { ease: "easeOut" },
          }}
          onMouseOver={handleMouseEnter}
          onClick={handleClick}
        >
          <Tilt
            perspective={400}
            tiltAngleYInitial={10}
            tiltAngleXInitial={10}
            style={{
              zIndex: 50,
              gridColumn: "1 / 2",
              alignSelf: "center",
              justifySelf: "center",
            }}
          >
            <SidebarImage>
              <img alt={imageName} src={imageUrl} />
            </SidebarImage>
          </Tilt>
          <Sidebar>
            {sidebarData.map(({ id, ...otherSidebarProps }, index) => (
              <SidebarItemLi key={id} index={index} {...otherSidebarProps} />
            ))}
          </Sidebar>
        </SidebarContainer>
      )}
    </AnimatePresence>
  );
};
export default Sidebars;
