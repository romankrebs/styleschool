import React from "react";
import { Grid } from "@material-ui/core";
import { styles, colors, useStyle } from "./styles";
import List from "../../components/list";

const Speaker = () => {
  const classes = useStyle();

  return (
    <div>
      <h2 style={{ ...styles.h2, color: colors.dark }}>Спикер:</h2>
      <Grid container justify="center" alignItems="stretch">
        <Grid
          item
          xs={12}
          md={6}
          style={{
            background:
              "url(/img/marketing-for-stylists/a-bodrova.jpg) center / 100% auto no-repeat",
            minHeight: "90vh"
          }}
        >
          <Grid container>
            <Grid item xs={5} md={5} style={{ padding: 8 }}>
              <div className={classes.tileBlack}>
                Александра Бодрова
                <br />
                Маркетолог, специалист по online-коммуникациям
              </div>
            </Grid>
            <Grid item xs={2} md={2} />
            <Grid item xs={5} md={5} style={{ padding: 8 }}>
              <div
                className={classes.tileBlack}
                style={{
                  fontStyle: "italic",
                  fontFamily: "Lora",
                  textAlign: "right",
                  fontSize: "0.9em"
                }}
              >
                Этот курс я адаптировала специально для профессионалов в
                beauty&#8209;сфере. Вас ждут технологии продвижения,
                рассказанные простым языком, без «воды». Я за руку поведу вас в
                мир digital&#8209;маркетинга, будет интересно!
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: 24,
            background: colors.light,
            color: colors.dark
          }}
        >
          <List
            arr={[
              "прошла путь smm-менеджера крупных компаний и бизнес-холдингов",
              "настроила более 500 рекламных кампаний",
              "занималась smm-продвижением и сопровождением крупнейших бизнес-форумов страны Synergy Global Forum, Synergy Insight Forum",
              "отвечала за развитие личного бренда владельцев и топ-менеджеров крупных компаний"
            ]}
            style={styles.pLarg}
          />
          <p className={classes.pLarg}>
            Сейчас занимается консультированием, преподаванием и частной
            практикой:
          </p>
          <List
            arr={[
              "Преподаватель в Высшей Школе Стилистики",
              "среди клиентов: Школа бизнеса «Синергия», ГК «Автомир», Автомир «Богемия» — официальный дилер SKODA, Дизайн-студия декора Sferadecora, Арт-галерея Vinnichenko Gallery, интернет-магазин косметики Shampoomania, Магазин дизайнерской одежды."
            ]}
            style={styles.pLarg}
          />
          <div
            style={{
              textAlign: "center"
            }}
          >
            <a href="https://facebook.com/">
              <img
                src="/img/facebook.svg"
                alt=""
                style={{
                  height: 32
                }}
              />
            </a>
            &emsp;
            <a href="https://instagram.com">
              <img
                src="/img/instagram.svg"
                alt=""
                style={{
                  height: 32
                }}
              />
            </a>
            &emsp;
            <a href="https://vk.com">
              <img
                src="/img/vk.svg"
                alt=""
                style={{
                  height: 32
                }}
              />
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Speaker;
