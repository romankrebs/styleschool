import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import List from "../../components/list";
import { styles } from "./styles";

export default function About() {
  return (
    <Grid
      container
      justify="center"
      alignItems="stretch"
      // style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2}>О преподавателе</h2>
      </Grid>
      <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
        <img
          src="/img/fashion-digital/teacher.jpg"
          style={{
            height: 200,
            borderRadius: "50%",
            position: "sticky",
            top: 1
          }}
          alt="Мэри Саргсян"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <List
          arr={[
            "Выпускающий редактор, Independent Media (Grazia Russia, Harper's Bazaar Russia)",
            <span>
              Редакционный директор, &laquo;Книга перемен. Материалы к истории
              русского искусства&raquo; (Музей современного искусства GARAGE)
            </span>,
            "Редакционный директор книги арт-критика А. А. Ковалева «КНИГА ПЕРЕМЕН. Материалы к истории русского искусства»",
            "Со-продюсер магистерской программы Высшей школы экономики «Трансмедийное производство в цифровых индустриях»",
            "Продюсер и куратор программы Высшей школы экономики «Fashion-медиа и коммуникации в эпоху digital»",
            "Колумнист ZOE Magazine, Italy",
            "Колумнист Buro 24/7, Singapore",
            "Колумнист Buro 24/7, Ukraine"
          ]}
          style={styles.p}
        />
        <p style={styles.p}>
          <br />
          Подробнее о преподавателе <Link to="/mary_sargsyan">здесь</Link>
        </p>
      </Grid>
    </Grid>
  );
}
