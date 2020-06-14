import React from "react";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";
import List from "../../components/list";
import { style } from "../../components/stylesCourse";
import Teacher from "./teacher";

export default function Teachers() {
  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} md={12}>
        <h2 style={style.h2small}>Автор и ведущая курса</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <Teacher
          head="Прохорович Елена"
          text={
            <Paragraph
              content={[
                "Специалист по рекламе и PR, коммуникационный тренер, предприниматель.",
                "Идеолог и основатель международных коммуникационных образовательных проектов:",
                <List
                  arr={[
                    "Стажировки на Milan fashion week / Milan design week;",
                    "Summer fashion school in Italy;"
                  ]}
                  style={style.pWidth}
                />,
                "Зам. директора лаборатории рекламы и коммуникаций в сфере моды и дизайна, преподаватель каф. рекламы и связей с общественностью, СПГУПТД.",
                "Более 10 лет консультирую компании по продвижению брендов и занимаюсь организацией профессиональных мероприятий в сфере B2B, B2C, а также маркетинговыми и бизнес исследованиями в индустрии моды.",
                "С 2015 года разрабатываю и провожу программы коммуникационного-коучинга и тренингов личной эффективности.",
                "Член Российской Ассоциации связей с общественностью."
              ]}
              style={style.pWidth}
            />
          }
          image="/img/international-communications/prohorovich.jpg"
        />
      </Grid>
    </Grid>
  );
}
