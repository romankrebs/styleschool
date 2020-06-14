import React from "react";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";
// import List from "../../components/list";
import { styles } from "./styles";
import Teacher from "../../components/teacher-in-course";

export default function Teachers() {
  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} md={12}>
        <h3 style={styles.h2small}>Автор и ведущая курса</h3>
      </Grid>
      <Grid item xs={12} md={12}>
        <Teacher
          head="Наталья Горских"
          text={
            <Paragraph
              content={[
                "К.филол.наук, преподаватель, специалист в области современных коммуникаций посредством визуального образа: художественного, модного, социального."
              ]}
              style={{ ...styles.p, textAlign: "justify" }}
            />
          }
          image="/img/conceptualfashion/teacher.jpg"
        />
      </Grid>
    </Grid>
  );
}
