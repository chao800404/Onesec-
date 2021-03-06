/** @format */
import {
  PopupContainer,
  PopupBox,
  PopupForm,
  PopupBoxContainer,
  PopupCover,
} from "./popup.style";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectPopupView } from "../../redux/shop/shop.select";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import UserGuide from "../userGuilde/userGuide.component";
import { cartAddItem } from "../../redux/cart/cart.action";
import ColorBox from "../colorBox/colorBox.component";
import GlassesModel from "../glassesCanvasModel/glassseCanvasModel.component";
import glassesIcon from "../../assets/svgIcon/glasses-icon.svg";
import glassesIconDark from "../../assets/svgIcon/glasses-icon-dark.svg";
import { ReactSVG } from "react-svg";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";
import { message } from "../../config/message";
import { cartToggleHidden } from "../../redux/cart/cart.action";
import toast from "react-hot-toast";
import useNotFoundPage from "../../utils/useNotFoundPage";
import { selectCardIsPointer } from "../../redux/card/card.select";
import { checkARIsPointer } from "../../redux/card/card.action";

const SvgIcon = ({ src, toggleElectrochromic, light }) => (
  <ReactSVG
    style={{
      pointerEvents: "none",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      opacity: light
        ? toggleElectrochromic
          ? 1
          : 0
        : toggleElectrochromic
        ? 0
        : 1,
    }}
    src={src}
    beforeInjection={(svg) =>
      svg.setAttribute(
        "style",
        "display:flex;align-items:center;justify-content:center;width:100%;height:3rem;fill:#fff"
      )
    }
  />
);

const Popup = ({ collection, collectionId }) => {
  const { colorType } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [transitionEnd, setTransitionEnd] = useState(false);
  const [toggleElectrochromic, setToggleElectrochromic] = useState(false);
  const [pageStart, setPageStart] = useState(false);
  const pointDown = useSelector(selectCardIsPointer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popupData = useSelector(selectPopupView(collectionId, colorType));
  const { rgb, price, image, _key, color } = popupData || {};
  const colorMap = collection?.product.map(({ rgb }) => rgb) || [];
  const location = useLocation();
  const title = `${collection?.productName}-${color}`;

  useNotFoundPage(popupData);

  const prevPage = location.pathname
    .split("/")
    .filter((_, index) => index < 3)
    .join("/");

  const goToPrevPage = () => {
    navigate(`${prevPage}`);
    setPageStart((prev) => !prev);
    document.body.style.overflow = "unset";
  };

  const changeGlassesColorParms = (color) => {
    const { curColor } = transferClassesTypeName({ color });
    navigate(`${prevPage}/${curColor}`);
  };

  const handleClick = (e) => {
    const target = e.target.dataset.item;
    const addToCartBtn = e.target.dataset.type;
    const parseIntQuantity = Number.parseInt(quantity);

    if (target === "popup-close" || target === "popup-bg") {
      goToPrevPage();
      return;
    }
    if (addToCartBtn === "electrochromic") {
      setToggleElectrochromic((prev) => !prev);
      return;
    }
    if (addToCartBtn === "add-cart-btn") {
      if (quantity <= 0) {
        toast.error(message["ERROR"]);
        return;
      } else {
        dispatch(
          cartAddItem({
            rgb,
            price,
            _key,
            image,
            color,
            quantity: parseIntQuantity,
            productName: collection?.productName,
            description: collection?.description,
          })
        );
        const addToCartMessage = message["ADDTOCART"].replace(
          /(\w*)quantity(.*)title(.*)/g,
          `$1${quantity}$2${title}$3`
        );
        toast.success(addToCartMessage);
        goToPrevPage();
        return;
      }
    }
  };

  const handleGuide = (e) => {
    const target = e.target.dataset.item;
    if (target === "popup-container" && pointDown <= 1) {
      dispatch(checkARIsPointer());
    }
  };

  useEffect(() => {
    dispatch(cartToggleHidden("hidden"));
    setPageStart((prev) => !prev);
  }, [dispatch]);

  return (
    <PopupContainer data-item="popup-bg" onClick={handleClick}>
      <PopupBoxContainer data-item="popup-bg">
        <PopupBox
          className={pointDown === 2 ? null : "popup-guide-container"}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          onAnimationComplete={() => setTransitionEnd(true)}
        >
          <IoCloseCircleSharp data-item="popup-close" className="popup_close" />
          {collection && transitionEnd && popupData && (
            <>
              <div className="popup-glasses">
                {transitionEnd && pageStart && (
                  <GlassesModel
                    type={collection.productName}
                    color={color}
                    toggleElectrochromic={toggleElectrochromic}
                  />
                )}
              </div>
              <PopupForm>
                <h3>{title}</h3>
                <div className="popup-text_container">
                  <p>{collection.description}</p>
                  <div className="color_container">
                    {colorMap?.map((rgb, index) => {
                      const { curColor } = transferClassesTypeName({
                        color: collection.product[index].color,
                      });
                      return (
                        <ColorBox
                          onClick={(e) =>
                            changeGlassesColorParms(e.target.dataset.color)
                          }
                          style={{
                            width: "1.8rem",
                            height: "1.8rem",
                            display: "block",
                            borderRadius: "50%",
                            backgroundColor: `${rgb}`,
                          }}
                          key={index}
                          color={collection.product[index].color}
                          active={curColor === colorType}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="popup_price">
                  NT$ {price.toLocaleString("US")}
                </div>
                <div className="popup_calculator">
                  <div className="popup_calculator_container">
                    <p>Quantity</p>
                    <div className="popup_calculator-item">
                      <div className="popup_calculator">
                        <AiOutlineMinus
                          onClick={() =>
                            quantity > 0 ? setQuantity(quantity - 1) : null
                          }
                        />
                        <input
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          type="number"
                        />
                        <AiOutlinePlus
                          onClick={() => setQuantity(quantity + 1)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button_container">
                  <div className="button_electrochromic_container">
                    <Button
                      data="electrochromic"
                      style={{ position: "relative" }}
                    >
                      <SvgIcon
                        src={glassesIconDark}
                        toggleElectrochromic={toggleElectrochromic}
                        light={true}
                      />
                      <SvgIcon
                        src={glassesIcon}
                        toggleElectrochromic={toggleElectrochromic}
                        ligth={false}
                      />
                    </Button>
                    {pointDown === 1 && (
                      <div className="button-electrochromic-guide " />
                    )}
                  </div>
                  <Button style={{ fontSize: "2rem" }} data="add-cart-btn">
                    Add To Cart
                  </Button>
                </div>
              </PopupForm>
              {pointDown <= 1 && (
                <PopupCover onClick={handleGuide} data-item="popup-container" />
              )}
            </>
          )}
        </PopupBox>
      </PopupBoxContainer>
      <UserGuide />
    </PopupContainer>
  );
};

export default Popup;
