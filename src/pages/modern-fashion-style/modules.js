import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./card";

export default class Modules extends React.Component {
  state = {
    card: null
  };

  toggle = n => (event, value) => {
    return this.setState({ card: value ? n : false });
  };

  render() {
    let { face } = this.state;

    const migranov = {
      head: "История Моды",
      title: (
        <span>
          Белая рубашка &ndash; константа в мире моды, актуальна во все времена
        </span>
      ),
      teacher: "Руслан Мигранов",
      date: "14 марта",
      time: (
        <span>
          19<sup>00</sup> по МСК
        </span>
      ),
      duration: "45 минут",
      text: (
        <span>
          Мы рассматриваем историю белой рубашки в контексте истории белого
          цвета. Насколько Белая рубашка была актуальна в разные времена,
          рассмотрим разные казусы, интересные истории. Как Белая рубашка
          входила в обиход городских жителей и как спорт повлиял на
          распространение белой рубашки в повседневности.
        </span>
      ),
      descript: "Онлайн-лекция",
      image: "/img/modern-fashion-style/migranov.jpg"
    };

    // const garderob = {
    //   head: "Стиль",
    //   title: "Весенний гардероб",
    //   teacher: "Инесса Трубецкова",
    //   date: "16 марта",
    //   time: (
    //     <span>
    //       10<sup>00</sup> - 17<sup>00</sup> по МСК
    //     </span>
    //   ),
    //   duration: "7 часов",
    //   text: (
    //     <span>
    //       У весны есть такая особенность &ndash; она всегда ожидаема, но
    //       нагрянуть может неожиданно и застать врасплох. Оставьте зиме все
    //       переживания и усталость. Настройтесь на позитив и почувствуйте себя
    //       женщиной на все 100%. И с первых же дней марта смените теплый шарф на
    //       шелковый платок. Ключи для весеннего базового гардероба: настроение,
    //       погода и праздники. Женственные и многослойные образы весны.
    //       Популярные стили на модном подиуме. Особенности одежды весеннего
    //       периода, актуальные цвета. Сочетания цветов в весеннем гардеробе.
    //       Весенняя база в гардеробе, хиты весны и аксессуары.
    //     </span>
    //   ),
    //   descript: (
    //     <span>
    //       Модные тенденции на весну 2019 года
    //       <br />
    //       Мастер-класс, очно!
    //     </span>
    //   ),
    //   image: "/img/modern-fashion-style/garderob.jpg"
    // };

    const industry = {
      head: "Красота",
      title: "Удивительная индустрия красоты 2019",
      teacher: "Яна Ахметова",
      date: "18 марта",
      time: (
        <span>
          10<sup>00</sup> по МСК
        </span>
      ),
      duration: "45 минут",
      text: (
        <span>
          Удивительная индустрия красоты 2019 &ndash; что нового? Самые
          необычные и удивительные средства, инструменты и гаджеты в области
          индустрии красоты 21 века, о которых вы даже не догадывались!
        </span>
      ),
      descript: "Онлайн-лекция",
      image: "/img/modern-fashion-style/beauty2019.jpg"
    };

    // const accessuaries = {
    //   head: "Имидж",
    //   title: "Аксессуары на языке эмоций и символов",
    //   teacher: "Лиана Бахова",
    //   date: "19 марта",
    //   time: (
    //     <span>
    //       20<sup>00</sup> по МСК
    //     </span>
    //   ),
    //   duration: "45 минут",
    //   text: (
    //     <span>
    //       На этой лекции мы выйдем за рамки стилистических правил комбинаторики
    //       аксессуарных сетов и рассмотрим аксессуары как знак взаимоотношений
    //       между чувственным миром человека и социумом. Выясним, как связаны
    //       телесно-ориентированная терапия и наш выбор украшений. Вспомним их
    //       культурно-историческую роль и на примере актуальных трендов прочитаем
    //       современный язык аксессуарных символов.
    //     </span>
    //   ),
    //   descript: "Онлайн-лекция",
    //   image: "/img/modern-fashion-style/accessuar.jpg"
    // };

    const verkbund = {
      head: "Искусство",
      title: "Ранний функционализм: Германский Веркбунд нач. ХХ в.",
      teacher: "Галина Варакина",
      date: "21 марта",
      time: (
        <span>
          20<sup>00</sup> по МСК
        </span>
      ),
      duration: "30 минут",
      text: (
        <span>
          На вебинаре мы окунемся в атмосферу европейской культуры начала ХХ
          века, время, когда модерн постепенно отступает перед натиском
          промышленной революции и функционализма. Одним из лидеров в мире
          нарождавшегося дизайна была Германия. Знакомство с германским
          Веркбундом &ndash; это возможность увидеть истоки современного дизайна
          и современного стиля.
        </span>
      ),
      descript: "Онлайн-лекция",
      image: "/img/modern-fashion-style/poster.jpg"
    };

    const antique = {
      head: "История дизайна и архитектуры",
      title: "Античный канон красоты: греческая и римская версии",
      teacher: "Галина Варакина",
      date: "21 марта",
      time: (
        <span>
          20<sup>30</sup> по МСК
        </span>
      ),
      duration: "30 минут",
      text: (
        <span>
          Античность до сих пор является символом высокого стиля, выступая
          основой наиболее знаковых разработок современных дизайнеров, как в
          предметных формах, так и в модной индустрии. Знание канонов античной
          классики &ndash; насущное требование архитектуры, искусства и дизайна.
          На вебинаре мы на примерах разберем наиболее важные принципы античной
          скульптуры и телесности в целом, познакомимся с наиболее яркими
          именами и значимыми объектами художественного наследия.
        </span>
      ),
      descript: "Онлайн-лекция",
      image: "/img/modern-fashion-style/antique.jpg"
    };

    const galantery = {
      head: "Мода",
      title: "Обувь и кожгалантерея. Обзор трендов 2019-20",
      teacher: "Марина Бонецкая",
      date: "22 марта",
      time: (
        <span>
          19<sup>00</sup> по МСК
        </span>
      ),
      duration: "45 минут",
      text: (
        <span>
          Увы, давно прошли те времена, когда можно было, взглянув на картинку
          из журнала или модную витрину, отчетливо уловить, как должны выглядеть
          туфли или сумка в следующем сезоне. Кажется, что сейчас в тренде все,
          что угодно... Однако, есть возможность все же разобраться, из чего
          складываются модные направления в обуви и кожгалантерее и как не
          прогадать с покупкой обновки. Приглашаю вас совершить обзор основных
          трендов 2019-20 по итогам Недель моды.
        </span>
      ),
      descript: "Онлайн-лекция",
      image: "/img/modern-fashion-style/shoes.jpg"
    };

    const vintazh = {
      head: "Мода",
      title: "Винтаж: современный стиль, индивидуальный подход. 60-е годы",
      teacher: "Светлана Кононец",
      date: "25 марта",
      time: (
        <span>
          10<sup>00</sup> по МСК
        </span>
      ),
      duration: "45 минут",
      text: (
        <span>
          Шестидесятые годы подарили миру мини моду. Но это не единственное
          наследие начала второй половины 20-го века. О том, как изменился
          женский образ после длительной для моды эры нью-лук, и как сегодня
          можно вписать наследие 60-х в современные тренды, мы поговорим на
          нашей встрече.
        </span>
      ),
      descript: "Онлайн-лекция",
      image: "/img/modern-fashion-style/vintazh.jpg"
    };

    return (
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={12}>
          <h2
            style={{
              fontFamily: "Roboto",
              fontSize: "2em",
              fontWeight: 700,
              textAlign: "center",
              color: "rgb(80,80,80)"
            }}
          >
            Ближайшие мероприятия Online
          </h2>
        </Grid>
        <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
          <Card
            head={migranov.head}
            title={migranov.title}
            teacher={migranov.teacher}
            descript={migranov.descript}
            image={migranov.image}
            text={migranov.text}
            onlineText="Запись вебинара"
            crown
            view
            //face={face === "card1"}
            //onClick={this.toggle("card1")}
          />
        </Grid>
        {/*
        <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
          <Card
            head={garderob.head}
            title={garderob.title}
            teacher={garderob.teacher}
            descript={garderob.descript}
            date={garderob.date}
            time={garderob.time}
            duration={garderob.duration}
            image={garderob.image}
            text={garderob.text}
            face={face === "card2"}
            onClick={this.toggle("card2")}
          />
        </Grid>
        */}
        <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
          <Card
            head={industry.head}
            title={industry.title}
            teacher={industry.teacher}
            descript={industry.descript}
            date={industry.date}
            time={industry.time}
            duration={industry.time}
            image={industry.image}
            text={industry.text}
            free
            face={face === "card3"}
            onClick={this.toggle("card3")}
          />
        </Grid>
        {/*
        <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
          <Card
            head={accessuaries.head}
            title={accessuaries.title}
            teacher={accessuaries.teacher}
            descript={accessuaries.descript}
            date={accessuaries.date}
            time={accessuaries.time}
            duration={accessuaries.duration}
            image={accessuaries.image}
            text={accessuaries.text}
            face={face === "card4"}
            onClick={this.toggle("card4")}
          />
        </Grid>
        */}
        <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
          <Card
            head={verkbund.head}
            title={verkbund.title}
            teacher={verkbund.teacher}
            descript={verkbund.descript}
            date={verkbund.date}
            time={verkbund.time}
            duration={verkbund.duration}
            image={verkbund.image}
            text={verkbund.text}
            crown
            face={face === "card5"}
            onClick={this.toggle("card5")}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
          <Card
            head={antique.head}
            title={antique.title}
            teacher={antique.teacher}
            descript={antique.descript}
            date={antique.date}
            time={antique.time}
            duration={antique.duration}
            image={antique.image}
            text={antique.text}
            q
            part
            onlineText="мастер класс"
            color="rose"
            face={face === "card6"}
            onClick={this.toggle("card6")}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
          <Card
            head={galantery.head}
            title={galantery.title}
            teacher={galantery.teacher}
            descript={galantery.descript}
            date={galantery.date}
            time={galantery.time}
            duration={galantery.duration}
            image={galantery.image}
            text={galantery.text}
            face={face === "card7"}
            onClick={this.toggle("card7")}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
          <Card
            head={vintazh.head}
            title={vintazh.title}
            teacher={vintazh.teacher}
            descript={vintazh.descript}
            date={vintazh.date}
            time={vintazh.time}
            duration={vintazh.duration}
            image={vintazh.image}
            text={vintazh.text}
            face={face === "card8"}
            onClick={this.toggle("card8")}
          />
        </Grid>
      </Grid>
    );
  }
}
