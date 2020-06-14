import React from "react";
import Grid from "@material-ui/core/Grid";

//import Slider from "../../components/slider-images";
import Slider from "react-slick";
import H2 from "../../components/head1";
import List from "../../components/list";

export default function Programma() {
  var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    },
    content = [
      "/img/makeup/01.jpg",
      "/img/makeup/02.jpg",
      "/img/makeup/03.jpg",
      "/img/makeup/04.jpg",
      "/img/makeup/05.jpg",
      "/img/makeup/06.jpg",
      //"/img/makeup/07.jpg",
      "/img/makeup/08.jpg",
      "/img/makeup/09.jpg",
      "/img/makeup/10.jpg",
      "/img/makeup/11.jpg"
    ];

  return (
    <Grid container alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <H2 content="Программа курса" />
      </Grid>
      <Grid item xs={12} md={5}>
        <div style={{ width: 320, height: 220, margin: "0 auto" }}>
          <Slider {...settings}>
            {content.map((el, index) => (
              <img
                src={el}
                alt=""
                key={index}
                style={{ height: 200, width: 300 }}
              />
            ))}
          </Slider>
        </div>
      </Grid>
      <Grid item xs={12} md={7}>
        <p
          style={{
            fontSize: "1.1em",
            fontWeight: 500,
            color: "rgb(100,100,100)",
            textAlign: "left",
            margin: 0,
            padding: 5,
            paddingTop: 0
          }}
        >
          В курс входят все популярные современные техники и виды макияжа:
        </p>
        <List
          arr={[
            "макияж на каждый день Just skin",
            "макияж глаз в классической технике",
            "голливудский макияж (в стиле Мерлин Монро)",
            "макияж в технике Smoky eyes (классическая и кремовая техники)",
            "макияж с использованием блесток, глиттеров, пигментов",
            "особенности макияжа для возрастной кожи, лифтинг-макияж",
            "а также колористика, стилистика образа, психология и особенности макияжа для фото проектов"
          ]}
          style={{
            fontSize: "0.9em",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            textAlign: "left",
            margin: 0,
            padding: 5
          }}
        />
      </Grid>
    </Grid>
  );
}
