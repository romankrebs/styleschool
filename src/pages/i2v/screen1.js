import React from "react";
import { Grid } from "@material-ui/core";
import List from "../../components/list";
import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles = {
  h2: {
    font: "500 1.8em 'Futura-Normal'",
    color: "rgb(100,100,100)",
    textAlign: "center"
  },
  ol: {
    listStyleImage: "url(/img/green/check-bold.svg)"
  },
  list: {
    fontSize: "1.4em",
    fontWeight: 500,
    fontFamily: "Futura-Normal",
    padding: "12px 0"
  }
};

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
};

const content = [
  "/img/i2v/i1.jpg",
  "/img/i2v/i2.jpg",
  "/img/i2v/i3.jpg",
  "/img/i2v/i4.jpg",
  "/img/i2v/i5.jpg",
  "/img/i2v/i6.jpg",
  "/img/i2v/i7.jpg",
  "/img/i2v/i8.jpg",
  "/img/i2v/i9.jpg"
];

const Screen1 = props => {
  return (
    <div>
      <Grid
        container
        spacing={3}
        justify="space-evenly"
        alignItems="center"
        style={{
          background:
            "radial-gradient(circle farthest-corner at 100px 80px, rgba(20,40,60,.1), rgba(80,200,180,.2), rgba(200,100,200,.3))"
        }}
      >
        <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
          <List
            arr={[
              "Университетский диплом",
              "Реальная практика",
              "Внимательные преподаватели",
              "Творческая атмосфера",
              "Модульная система обучения",
              "Доступно очно и дистанционно"
            ]}
            olStyle={styles.ol}
            style={styles.list}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <div
            style={{
              maxWidth: 300,
              margin: "0 auto"
            }}
          >
            <Slider {...settings}>
              {content.map((el, index) => (
                <img src={el} alt="" key={index} />
              ))}
            </Slider>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Screen1;
