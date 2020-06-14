import React from "react";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import Grid from "@material-ui/core/Grid";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";

export default function Teach() {
  var content = [
    {
      title: "Образование",
      text: (
        <p>
          Сибирский Государственный Университет Путей Сообщения, специальность
          «Антикризисное управление»
        </p>
      )
    },
    {
      title: "Дополнительное образование",
      text: (
        <p>
          Программа профессиональной переподготовки «Имидж-консалтинг и
          fashion-styling» ВШС (Новосибирск)
        </p>
      )
    },
    {
      title: "Опыт работы",
      text: (
        <p>
          Практикующий имидж-стилист, fashion-иллюстратор, fashion-журналист.
          Работа как с частными клиентами, так с корпоративными: создание
          лукбуков, каталогов для магазинов модной одежды. Организация проектов
          по созданию стильной фотосессии и участие в качестве стилиста. Автор
          статей на темы моды и стиля.
        </p>
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Софья Зозуля: Публичный профиль</title>
        <meta name="keywords" content="Софья Зозуля: Публичный профиль" />
      </Helmet>
      <Top />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head={
              <span>
                Софья Зозуля&emsp;
                <a href="https://instagram.com/sofyazozulya">
                  <img
                    src="/img/instagram.svg"
                    alt=""
                    style={{ height: 18, opacity: 0.7 }}
                  />
                </a>
                &emsp;
                <a href="https://www.facebook.com/profile.php?id=100002113906771">
                  <img
                    src="/img/facebook.svg"
                    alt=""
                    style={{ height: 18, opacity: 0.7 }}
                  />
                </a>
                &emsp;
                <a href="https://www.vk.com/sofia.chesnokova">
                  <img
                    src="/img/vk.svg"
                    alt=""
                    style={{ height: 18, opacity: 0.7 }}
                  />
                </a>
              </span>
            }
            short="Практикующий имидж-стилист, fashion-иллюстратор"
            image="/img/blog/author/zozulya.jpg"
            tiles={[
              {
                image: "/img/star.svg",
                title: "Опыт работы:",
                text:
                  "Практикующий имидж-стилист, fashion-иллюстратор, fashion-журналист."
              }
            ]}
            content={content}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
