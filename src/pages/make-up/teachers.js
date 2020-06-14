import React from "react";
import Slider from "react-slick";

function Teacher(props) {
  return(
    <div style={{
      textAlign: "center",
      padding: 12,
    }}>
      <a href={props.link}>
        <img
          src={props.image}
          alt={props.name}
          style={{
            maxWidth: "100%",
            borderRadius: "50%",
            margin: "0 auto",
          }}
        />
      </a>
      <a href={props.link}>
        <h3 style={{
          font: '500 1.6em "Lora"',
          color: "rgb(100,100,100)",
          textAlign: "center",
          margin: 0,
          padding: "24px 0 12px 0",
        }}>{props.name}</h3>
      </a>
      <p style={{
        font: '400 0.9em "Roboto"',
        color: "rgb(100,100,100)",
        textAlign: "center",
        margin: 0,
        padding: 0,
      }}>{props.text}</p>
    </div>
  );
}

let content = [
  {
    image: "/img/make-up/hachatryan.jpg",
    name: "Лана  Хачятрян",
    text: <span>Бизнес-тренер, технолог-эксперт, колорист. Входит в пятерку международных преподавателей REVLON Professional Ambassadors (Международный посол).</span>,
    link: "/user/profile.php?id=1267",
  },
  {
    image: "/img/make-up/ahmetova.jpg",
    name: "Яна Ахметова",
    text: <span>Руководитель студии профессионального макияжа «ProMakeupArtist». Соавтор и постоянный тренер образовательного проекта ProMakeupArtist School Prague (Прага, Чехия).</span>,
    link: "/user/profile.php?id=1244",
  },
  {
    image: "/img/make-up/fomina.jpg",
    name: "Татьяна Фомина",
    text: <span>Художник-модельер, преподаватель и практикующий имидж-консультант. В Высшей школы стилистики ведет занятия в рамках дисциплины &laquo;Профессинальные имидж-технологии&raquo;.</span>,
    link: "/tatiana-fomina",
  },
  {
    image: "/img/make-up/pinzari.jpg",
    name: "Елена Пинзари",
    text: <span>Визажист международного класса, профессиональный brow-мастер, гример. Соавтор и постоянный тренер образовательного проекта ProMakeupArtist School Prague (Прага, Чехия).</span>,
    link: "/user/profile.php?id=1260",
  },
];

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
};

export default function Slides() {
  return(
    <div>
      <h2 style={{
        font: '500 2em "Lora"',
        color: "rgb(100,100,100)",
        textAlign: "center",
        margin: 0,
        padding: "80px 0 24px 0",
      }}>Преподаватели</h2>
      <Slider {...settings}>
        {
          content.map((el, i) => (
            <Teacher
              image={el.image}
              name={el.name}
              text={el.text}
              link={el.link}
              key={i}
            />
          ))
        }
      </Slider>
    </div>
  );
}