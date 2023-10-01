import { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

import deskStyles from "./DeskMenuItem.module.css";
import phoneStyles from "./PhoneMenuItem.module.css";

const MenuItem = (props) => {
  const [glowing, setGlowing] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const styles = !isMobile ? deskStyles : phoneStyles;

  const darkLetters = {
    color: "gold",
    fontSize: !isMobile ? "1.8rem" : "1.3rem",
  };

  const clickHandler = () => {
    props.chosen(props.title);
  };

  useEffect(() => {
    const turnOffGlow = setTimeout(() => {
      setGlowing(false);
    }, 100);
  }, []);

  return (
    <p
      onClick={clickHandler}
      className={styles.sideBarItem}
      style={glowing ? darkLetters : null}
    >
      {props.title}
    </p>
  );
};

export default MenuItem;
