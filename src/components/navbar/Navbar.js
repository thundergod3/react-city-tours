import React from "react";
import logo from "../../logo.png";
import { withStyles } from "@material-ui/core";

const styles = () => {
  return {
    navBar: {
      background: " var(--mainBlack)",
      padding: " 0.5rem 1rem",
      display: "grid",
      gridTemplateColumns: "auto 1fr"
    },
    ulLinks: {
      alignSelf: "center",
      listStyleType: "none",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      textAlign: "center"
    },
    ulLink: {
      color: "var(--mainGrey)",
      textTransform: "capitalize",
      textDecoration: "none",
      fontSize: "1.2rem",
      transition: "all 0.5s linear",
      "&:hover": {
        color: "var(--mainGreen)"
      },
      "& :active": {
        color: "var(--mainGreen)"
      }
    }
  };
};

const Navbar = props => {
  const { classes } = props;
  return (
    <nav className={classes.navBar}>
      <img src={logo} alt="city tours logo" />
      <ul className={classes.ulLinks}>
        <li>
          <a href="/" className={classes.ulLink}>
            home
          </a>
        </li>
        <li>
          <a href="/" className={classes.ulLink}>
            About
          </a>
        </li>
        <li>
          <a href="/" className={classes.ulLink}>
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default withStyles(styles)(Navbar);
