import React, { useState } from "react";
import { withStyles } from "@material-ui/core";

const styles = () => {
  return {
    tourItem: {
      background: "var(--mainGrey)",
      borderRadius: "0.8rem",
      margin: "1rem 0",
      "& img": {
        width: "100%",
        borderTopLeftRadius: "0.8rem",
        borderTopRightRadius: "0.8rem",
        display: "block"
      }
    },
    imgContainer: {
      position: "relative",
      "&:hover > span": {
        opacity: "1"
      }
    },
    closeBtn: {
      position: "absolute",
      display: "block",
      top: "5%",
      right: "5%",
      color: "var(--mainGreen)",
      fontSize: "2rem",
      cursor: "pointer",
      transition: "all 0.3s linear",
      opacity: "0"
    },
    tourInfo: {
      padding: "1rem 0.5rem",
      "& > h3": {
        textTransform: "uppercase",
        color: "var(--mainGreen)"
      },
      "& > h4": {
        textTransform: "capitalize",
        color: "var(--mainBlack)",
        margin: "0.2rem 0 0.6rem 0"
      },
      "& > h5": {
        textTransform: "capitalize",
        "& span": {
          color: "var(--mainGreen)",
          margin: "0.5rem",
          fontSize: "1.2rem",
          cursor: "pointer"
        }
      }
    }
  };
};

const Tour = props => {
  const { classes, tour, removeTour } = props;
  const { id, img, city, name, info } = tour;
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  }

  return (
    <article className={classes.tourItem}>
      <div className={classes.imgContainer}>
        <img src={img} alt="" />
        <span className={classes.closeBtn} onClick={() => removeTour(id)}>
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className={classes.tourInfo}>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info
          <span onClick={() => handleInfo()}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
        
      </div>
    </article>
  );
};

export default withStyles(styles)(Tour);
