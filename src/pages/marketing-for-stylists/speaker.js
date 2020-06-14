import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { styles, colors } from "./styles";
import List from "../../components/list";

const Speaker = () => {
  return (
    <div>
      <h2 style={{ ...styles.h2, color: colors.dark }}>Спикер:</h2>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <div style={styles.speaker}>
            Александра Бодрова
            <br />
            Маркетолог, специалист по online-коммуникациям
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item md={2} />
        </Hidden>
        <Grid xs={12} md={12}>
          <div style={{ height: 24 }} />
        </Grid>
        <Grid item xs={12} md={9}>
          <p style={{ ...styles.quote, color: colors.middle2 }}>
            Этот курс я адаптировала специально для профессионалов в
            beauty&#8209;сфере. Вас ждут технологии продвижения, рассказанные
            простым языком, без «воды». Я за руку поведу вас в мир
            digital&#8209;маркетинга, будет интересно!
          </p>
        </Grid>
        <Grid xs={12} md={12}>
          <div style={{ height: 24 }} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container alignItems="stretch">
            <Grid
              item
              xs={12}
              md={5}
              style={{
                background: colors.lightTrans, // "url(/img/marketing-for-stylists/a-bodrova.jpg) top 70% left 50% / 90% auto no-repeat",
                textAlign: "center",
                padding: 0,
                lineHeight: 0
              }}
            >
              <img
                src="/img/marketing-for-stylists/speaker.jpg"
                alt="Александра Бодрова"
                style={{ maxWidth: "100%", margin: 0 }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              style={{
                background: colors.lightTrans
              }}
            >
              <List
                arr={[
                  "5 лет в сфере интернет-маркетинга, настроила и успешно провела более 500 рекламных кампаний",
                  "занималась smm-продвижением и сопровождением крупнейших бизнес-форумов страны Synergy Global Forum, Synergy Insight Forum",
                  "отвечала за развитие личного бренда владельцев и топ-менеджеров крупных компаний",
                  "Преподаватель в Высшей Школе Стилистики",
                  "среди клиентов: Школа бизнеса «Синергия», ГК «Автомир», Автомир «Богемия» — официальный дилер SKODA, Дизайн-студия декора Sferadecora, Арт-галерея Vinnichenko Gallery, интернет-магазин косметики Shampoomania, Магазин дизайнерской одежды."
                ]}
                num="none"
                style={styles.listSpeaker}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={12}>
          <div style={{ height: 24 }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Speaker;
