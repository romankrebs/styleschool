import React from "react";
import Title from "./title-meta";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Header from "./header-links";
import Top from "../../components/topmenu";
import Paragraph from "../../components/p-array";
import Footer from "../../components/footer";

const name = "Лариса Маничева";

const styles = makeStyles({
  container: {
    maxWidth: 1000,
    margin: "0 auto"
  },
  h2: {
    color: "rgb(123,143,87)",
    fontSize: "1.8em",
    fontWeight: 700,
    textAlign: "left",
    margin: 0,
    padding: "12px 0"
  },
  h3: {
    color: "rgb(123,143,87)",
    fontSize: "1.4em",
    fontWeight: 700,
    textAlign: "left",
    margin: 0,
    padding: "12px 0"
  },
  text: {
    fontSize: "1em",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: "12px 0",
    textAlign: "justify"
  },
  gray: {
    background: "rgb(213,209,201)",
    padding: 12,
    color: "rgb(100,100,100)",
    fontSize: "1.2em",
    fontWeight: 400,
    fontFamily: "Futura-Normal"
  }
});

export default function Profile() {
  const classes = styles();

  return (
    <div>
      <Title title={name} public />
      <Top />
      <Grid container justify="center" className={classes.container}>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            background:
              "url(/img/graduates/manicheva1.jpg) top center / cover no-repeat",
            padding: 0
          }}
        >
          <div style={{ padding: 0, paddingTop: "calc(100vh - 154px)" }}>
            <Header head={name} />
          </div>
        </Grid>
        <Grid item xs={12} md={11}>
          <Grid container spacing={3} justify="center" alignItems="stretch">
            <Grid item xs={12} md={6}>
              <h2 className={classes.h2}>
                «История успеха» Лариса Маничева
                <br />
                Программа «Имиджмейкер. Второе высшее»
              </h2>
              <Paragraph
                j
                content={[
                  "Год назад мне посчастливилось стать студенткой ВШС. Честно говоря, решение было спонтанным, ведь у меня уже 3 высших образования, одно из них международное (психологический Факультет, управление персоналом, МBA, канадская школа Коучинга и много других образовательных программ).",
                  "Я была приятно удивлена, с одной стороны, грамотно построенному насыщенному, структурированному учебному процессу, интересной насыщенной программе, организованной техподдержке, очень доброжелательному руководящему и преподавательскому составу."
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3 className={classes.h3}>
                Особо хочу отметить индивидуальный подход к каждому слушателю
                программы.
              </h3>
              <Paragraph
                j
                content={[
                  <React.Fragment>
                    Это удивительно, как обучаясь в одной группе, слушая
                    одинаковые лекции, выполняя одинаковые домашние задания
                    каждый смог найти себя, свой путь в новой профессии.
                    Безусловно, это заслуга преподавателей и, конечно, Натальи
                    Александровны Горских &mdash; заместителю директора Школы,
                    которая, оставаясь всегда связи, стирая все сложившиеся
                    стереотипы, формируя истинную систему ценностей, сумела
                    интегрировать просто информацию в руководство к действию.
                  </React.Fragment>
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.gray}>
                Пожалуй, процесс обучения можно сравнить с увлекательным
                путешествием, приятным, мягким погружением в кажущейся всем
                понятный, желанный мир внешней и внутренней красоты, ее истории,
                умению ее понимать и делать первые, робкие шаги в умении
                создавать, вернее, творить прекрасное!
              </div>
              <p className={classes.text}>
                Показательным для моментом стала глубина и тщательная проработка
                как всей учебной программы, так и отдельных ее курсов. Сначала
                мы учились понимать цвет, формы, сочетания, историю стиля. Потом
                вместе с преподавателями делали первые шаги в сложном мире
                профессионального создания образов, формированию своего
                индивидуального и профессионального стиля и, конечно, системы
                ценностей, без которой нельзя даже видеть и понимать всю глубину
                прекрасного.
              </p>
              <div className={classes.gray}>
                Если к процессу обучения подходить серьезно, то непременно
                получишь в качестве бонуса понимание и чувство стиля как
                такового. Для меня обучение было очень продуктивным. Я сумела
                создать и вывести на рынок 3 новых бренда. У меня сформировался
                новый круг общения, появились интересные клиенты и много новых
                интересных идей, которые я обязательно реализую!
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              <img
                src="/img/graduates/manicheva2.jpg"
                alt={name}
                style={{ maxWidth: "60%", position: "sticky", top: 1 }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <div className={classes.gray} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "3em",
                    color: "rgba(255,255,255,0.7)"
                  }}
                >
                  &laquo;
                </span>
                &emsp; По-доброму завидную тем, кто еще будет учиться в ВШС!
                Удачи!
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  textAlign: "right",
                  color: "rgb(100,100,100)"
                }}
              >
                {name}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
