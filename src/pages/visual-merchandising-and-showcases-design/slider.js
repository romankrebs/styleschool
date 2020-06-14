import React from "react";
import Slider from "react-slick";
//import Grid from "@material-ui/core/Grid";

//import H2 from "../../components/head1";

function Slide(props) {
  return (
    <div>
      <p
        style={{
          margin: 0,
          padding: 0
        }}
      >
        <img
          src={props.image}
          alt=""
          style={{
            height: "auto",
            width: "100%"
          }}
        />
      </p>
    </div>
  );
}

export default function Component() {
  var cont = {
    a: {
      image: "/img/vitrinism/foto1.jpg"
    },
    b: {
      image: "/img/vitrinism/foto2.jpg"
    },
    c: {
      image: "/img/vitrinism/foto3.jpg"
    },
    d: {
      image: "/img/vitrinism/foto5.jpg"
    },
    e: {
      image: "/img/vitrinism/foto6.jpg"
    },
    f: {
      image: "/img/vitrinism/foto9.jpg"
    },
    g: {
      image: "/img/vitrinism/foto4.jpg"
    },
    h: {
      image: "/img/vitrinism/foto11.jpg"
    },
    i: {
      image: "/img/vitrinism/foto13.jpg"
    },
    j: {
      image: "/img/vitrinism/foto14.jpg"
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true
  };

  return (
    <Slider {...settings}>
      <Slide image={cont.a.image} />
      <Slide image={cont.b.image} />
      <Slide image={cont.c.image} />
      <Slide image={cont.d.image} />
      <Slide image={cont.e.image} />
      <Slide image={cont.f.image} />
      <Slide image={cont.g.image} />
      <Slide image={cont.h.image} />
      <Slide image={cont.i.image} />
      <Slide image={cont.j.image} />
    </Slider>
  );
}
