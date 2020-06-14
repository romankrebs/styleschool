import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import Teacher from "../../components/teacher";
import Top from "../../components/topmenu";
import List from "../../components/list";

export default function Teach() {
  var content = [
    {
      title: "",
      text: (
        <span>
          Преподаватель курса &laquo;Основные стратегии современной модной
          индустрии&raquo; в составе программы профессиональной переподготовки
          &laquo;Имиджмейкер. Второе высшее&raquo;, авторского курса
          &laquo;Концептуальное искусство и концептуальная мода&raquo;, циклов
          лекций по искусству и художественному образу
        </span>
      )
    },
    {
      title: "Образование",
      text: (
        <span>
          Томский Государственный Университет, Филологический Факультет
          <br />
          Кандидат филологических наук по специальности &laquo;Русская
          литература&raquo;
        </span>
      )
    },
    {
      title: "Дополнительное образование",
      text:
        "Международный сертификат по программе: «Управление проектами – развитие в XXI веке. Стандарт ANSI PMI PMBOK Guide 2000»"
    },
    {
      title: "Опыт работы",
      text: (
        <div>
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              fontWeight: 700,
              color: "rgb(140,140,140)",
              textAlign: "left"
            }}
          >
            Преподавательская деятельность
          </h3>
          <List
            arr={[
              "Высшая школа стилистики: разработка и внедрение актуальных курсов и программ в области коммуникаций и профессионального образа, в области искусства, в области теории моды. Курсы разработаны как для очного, так и для дистанционного формата обучения.",
              "Санкт-Петербургское отделение Института Проектного Менеджмента (PMI): разработка и проведение курса обучения по программе «Базовый курс по управлению проектами на основе Стандарта ANSI PMI PMBOK® Guide 4th Edition» для дистанционного формата обучения. Проведение семинаров по теме: «Управление человеческими ресурсами», «Управление коммуникациями» для очного формата обучения.",
              "Кузбасская Государственная Педагогическая Академия: разработка и ведение курсов «Введение в литературоведение», «Зарубежная литература XVII – XVIII веков», «Философия культуры», «Вещь в пространстве культуры и человека»."
            ]}
          />
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              fontWeight: 700,
              color: "rgb(140,140,140)",
              textAlign: "left"
            }}
          >
            Экспертная деятельность
          </h3>
          <p>
            Проведение мастер-классов для корпоративных клиентов, участие в
            качестве спикера и члена жюри Форума Бизнеса Моды Fasnion-Management
            (Новосибирск), многочисленные журнальные публикации статей на тему
            современной моды как формы визуальной коммуникации.
          </p>
        </div>
      )
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Наталья Горских: Публичный профиль</title>
        <meta name="keywords" content="Наталья Горских: Публичный профиль" />
      </Helmet>
      <Top faqultet="Преподаватели" />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item style={{ padding: 20 }}>
          <Teacher
            head="Наталья Горских"
            short="Кандидат филологических наук, преподаватель ВШС"
            image="/img/about/natalya-gorskih.jpg"
            tiles={[
              {
                image: "/img/star.svg",
                title: "Более 15 лет",
                text: "опыт преподавательской деятельности"
              },
              {
                image: "/img/account-group.svg",
                title: "член PMI",
                text:
                  "Международная организация для профессионалов в области управления проектами"
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
