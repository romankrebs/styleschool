import React from "react";
import Slider from "react-slick";
import Tooltip from "@material-ui/core/Tooltip";

function Slide(props) {
  return (
    <div
      style={{
        padding: 10
      }}
    >
      <Tooltip
        disableFocusListener
        disableTouchListener
        title={props.descript}
        placement="top"
      >
        <div
          style={{
            background: `url(${props.image}) top left / cover no-repeat`,
            height: 280,
            width: 200,
            paddingTop: 250,
            boxSizing: "border-box",
            borderRadius: 4
          }}
        >
          <p
            style={{
              background: "rgba(0,0,0,0.6)",
              boxSizing: "border-box",
              color: "rgb(255,255,255)",
              // fontFamily: "Roboto",
              fontSize: 14,
              textAlign: "center",
              height: 32,
              margin: 0,
              paddingTop: 4,
              ...props.style
            }}
          >
            {props.name}
          </p>
        </div>
      </Tooltip>
    </div>
  );
}

export default function Teachers(props) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true
  };

  return (
    <Slider {...settings}>
      {props.teachers.map((a, i) => (
        <Slide
          name={a.name}
          descript={a.descript}
          image={a.image}
          key={i}
          style={props.style}
        />
      ))}
    </Slider>
  );
}
