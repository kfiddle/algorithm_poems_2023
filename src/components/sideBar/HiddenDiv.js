import { useMediaQuery } from "react-responsive";
import styles from "./HiddenDiv.module.css";

const HiddenDiv = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      className={styles.hiddenDiv}
      style={{
        transform: `translateX(${props.placement}vw)`,
        marginTop: !isMobile ? "20vh" : "30vh",
      }}
    ></div>
  );
};

export default HiddenDiv;
