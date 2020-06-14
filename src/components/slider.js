import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Grid from "@material-ui/core/Grid";

export default function Slider(props) {
  var slideContent = props.arr.map((el, i) => (
    //<div style={{ background: "rgba(255,255,255,0.3)" }}>
    <div key={i}>
      <img src={el.image} alt="" />
      <p style={{ background: "none" }} className="legend">
        {el.comment}
      </p>
    </div>
  ));
  var thumbs, indicators, play;
  props.thumbs === undefined ? (thumbs = false) : (thumbs = props.thumbs);
  props.indicators === undefined
    ? (indicators = true)
    : (indicators = props.indicators);
  props.play === undefined ? (play = true) : (play = props.play);
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Carousel
        // showThumbs={thumbs}
        // infiniteLoop={true}
        // showStatus={false}
        // showIndicators={indicators}
        // autoPlay={play}
        // interval={4000}
        // transitionTime={500}
        >
          {slideContent}
        </Carousel>
      </Grid>
    </Grid>
  );
}
