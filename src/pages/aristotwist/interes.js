import React from "react";
import Grid from "@material-ui/core/Grid";

import List from "../../components/list";

export default function Interes() {
  var styles = {
    head: {
      textAlign: "center",
      fontFamily: "Cormorant Garamond",
      fontSize: 36,
      fontWeight: 400,
      color: "rgb(100,100,100)",
    },
    left: {
      padding: 0,
      paddingLeft: "5%",
      paddingRight: 10,
    },
    right: {
      padding: 0,
      paddingRight: "5%",
      paddingLest: 10,
    },
    image: {
      borderRadius: "50%",
      height: 180,
    }
  };

  return (
    <div>
      <h2 style={{
        fontFamily: "Cormorant Garamond",
        fontWeight: 400,
        fontSize: "2.5em",
        textAlign: "center",
      }}>
        Кому будет интересен курс:
      </h2>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <h3 style={styles.head}>Коммерсанту</h3>
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={12} md={5} style={{...styles.left, paddingTop: 15}}>
              <img src="/img/aristotwist/watch.jpg" alt="" style={styles.image} />
            </Grid>
            <Grid item xs={12} md={7} style={styles.right}>
              <List arr={[
                "Тем кто создает личный бренд и прокачивает карьеру",
                "Тем, кто занимает представительские должности и хочет соответствовать мировому стандарту бизнес сообщества",
                <span>Тем кто работает над имиджем&nbsp;&mdash; собственным или клиентским&nbsp;&mdash; и понимает, что гардероба и парикмахера для социальных свершений недостаточно</span>
              ]}
                style={{ fontFamily: "Roboto", fontSize: "0.85em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 style={styles.head}>Энтузиасту</h3>
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={12} md={7} style={styles.left}>
              <List arr={[
                "Тем кто устал волноваться правильно ли он делает и как его воспринимают окружающие",
                "Тем кто хочет знать правила и не искать выход из неловкого положения",
                "Тем кто хочет на 100% научиться использовать первый шанс чтобы произвести нужное впечатление"
              ]}
                style={{ fontFamily: "Roboto", fontSize: "0.85em" }}
              />
            </Grid>
            <Grid item xs={12} md={5} style={{...styles.right, paddingTop: 15}}>
              <img src="/img/aristotwist/acces.jpg" alt="" style={styles.image} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}