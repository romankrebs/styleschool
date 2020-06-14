import React from "react";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import { Grid } from "@material-ui/core";
import { styles } from "./styles";

export const content = {
  date: (
    <React.Fragment>
      24 декабря
      <br />
      19:00
    </React.Fragment>
  ),
  title: "Личный бренд в индустрии моды, с чего начать?",
  descript: "Открытая лекция",
  linkButton: "",
  content: (
    <Paragraph
      content={[
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12} md={6}>
            <h3 style={styles.h3}>Как сделать так</h3>
            <List
              arr={[
                "чтобы вас заметили",
                "и презентовать себя как эксперта в своей сфере"
              ]}
              style={styles.pEnd}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 style={styles.h3}>и узнать</h3>
            <List
              arr={[
                "какие способы продвижения и раскрутки личного бренда существуют",
                "с чего начать развитие личного бренда"
              ]}
              style={styles.pEnd}
            />
          </Grid>
        </Grid>,
        <span>&emsp;</span>,
        "На открытой лекции 24 декабря в 19:00 мы вместе проанализируем ваш бренд / продукт / услугу. Я дам определенные рекомендации по Вашему развитию.",
        <h3 style={styles.h3}>Что будет:</h3>,
        <List
          arr={[
            "Обсудим современные подходы к формированию личного бренда",
            "Что даёт личный бренд",
            "Что такое добавленная стоимость",
            "Основные вопросы на которые нужно ответить прежде чем начать",
            "Основные этапы",
            "Разберём ваши бренды"
          ]}
          style={styles.pEnd}
        />,
        <h3 style={styles.h3}>Автор и ведущая курса</h3>,
        <Grid
          container
          spacing={2}
          justify="space-between"
          alingItems="stretch"
        >
          <Grid item xs={12} md={5}>
            <div style={{ paddingTop: ".6em", position: "sticky", top: 1 }}>
              <img
                src="/img/international-communications/prohorovich-bw.jpg"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paragraph
              content={[
                <h3 style={styles.h3}>Елена Прохорович</h3>,
                "Специалист по рекламе и PR, коммуникационный тренер, предприниматель.",
                "Идеолог и основатель международных коммуникационных образовательных проектов:",
                <List
                  arr={[
                    "Стажировки на Milan fashion week / Milan design week",
                    "Summer fashion school in Italy"
                  ]}
                  style={styles.p}
                />,
                <b>Профессиональный опыт</b>,
                "Зам. директора лаборатории рекламы и коммуникаций в сфере моды и дизайна, преподаватель каф. рекламы и связей с общественностью, СПГУПТД.",
                "Более 10 лет консультирует компании по продвижению брендов и организации профессиональных мероприятий в сфере B2B, B2C, а также маркетинговыми и бизнес исследованиями в индустрии моды.",
                "С 2015 года проводит программы коммуникационного-коучинга и тренингов личной эффективности.",
                "Член Российской Ассоциации связей с общественностью."
              ]}
              style={styles.p}
            />
          </Grid>
        </Grid>
      ]}
      style={styles.p}
    />
  )
};
