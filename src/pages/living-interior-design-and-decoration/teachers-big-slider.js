import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(160,160,160)",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(160,160,160)",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

function Slide(props) {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={6} md={6}>
        <div
          style={{
            textAlign: "left"
          }}
        >
          <Link to={props.link}>
            <img
              src={props.image}
              alt=""
              style={{
                borderRadius: "50%",
                height: 150,
                filter: "grayscale(100%)"
              }}
            />
          </Link>
        </div>
      </Grid>
      <Grid item xs={6} md={6} style={{ paddingLeft: 0, marginLeft: 0 }}>
        <Link to={props.link}>
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              textAlign: "center",
              fontWeight: 500,
              color: "rgb(100,100,100)",
              margin: 0,
              padding: 0,
              paddingBottom: "0.5em"
            }}
          >
            {props.name}
          </h3>
        </Link>
        <p
          style={{
            // fontFamily: "Roboto",
            fontSize: "0.9em",
            textAlign: "left",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            margin: 0,
            padding: 0
          }}
        >
          {props.text}
        </p>
      </Grid>
    </Grid>
  );
}

function SliderVariant(props) {
  return (
    <Slider {...props.setting}>
      <Slide
        image="/img/teachers/lamonova-q.jpg"
        name="Елена Ламонова"
        text="Дизайнер. Специалист в области интерьерного, ландшафтного, предметного дизайна."
        link="/elena-lamonova"
      />
      <Slide
        image="/img/teachers/marina-kostarnova.jpg"
        name="Марина Костарнова"
        text="Практикующий дизайнер и декоратор. Член Международного Союза дизайнеров"
        link="/marina_kostarnova"
      />
      <Slide
        image="/img/teachers/galina-varakina.jpg"
        name="Галина Варакина"
        text=""
        link="/galina_varakina"
      />
      <Slide
        image="/img/teachers/rotar_qu.jpg"
        name="Татьяна Ротарь"
        text="Дизайнер интерьера, преподаватель #ВШСДТ"
        link="/tatyana_rotar"
      />
    </Slider>
  );
}

export default function Teachers(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  var settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
      <Hidden implementation="css" smDown>
        <SliderVariant setting={settings} />
      </Hidden>
      <Hidden implementation="css" mdUp>
        <SliderVariant setting={settingsMobile} />
      </Hidden>
    </div>
  );
}
