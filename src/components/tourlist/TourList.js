import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import Tour from "../tour/Tour";
import { tourData } from "../tourData";

const styles = () => {
  return {
    "@media screen and (min-width: 768px)": {
      tourList: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "1.5rem"
      }
    },
    "@media screen and (min-width: 992px)": {
      tourList: {
        width: "85vw",
        gridTemplateColumns: "repeat(3, 1fr)"
      }
    },
    "@media screen and (min-width: 1140px)": {
      tourList: {
        gridTemplateColumns: "repeat(4, 1fr)"
      }
    },
    tourList: {
      width: "70vw",
      margin: "0 auto",
      padding: "2rem 0"
    }
  };
};

const TourList = props => {
  const { classes } = props;
  const [tours, setTour] = useState(tourData);

  const removeTour = id => {
    const sortedTours = tours.filter(tour => tour.id !== id)
    setTour(sortedTours)
  }

  return (
    <section className={classes.tourList}>
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
      ))}
    </section>
  );
};

export default withStyles(styles)(TourList);
