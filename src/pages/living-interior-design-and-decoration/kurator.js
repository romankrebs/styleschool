import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Descript() {
  var styles = {
    text: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1.25em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      margin: 0,
      padding: 4
    },
    head: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1.75em",
      textAlign: "center",
      color: "rgb(134,158,94)",
      margin: 0,
      padding: 20
    }
  };

  return (
    <div>
      <Grid
        container
        justify="center"
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid
          item
          xs={12}
          md={9}
          style={{ textAlign: "center", paddingTop: 20 }}
        >
          <p style={styles.text}>
            Вы можете получить больше информации, связавшись с куратором
            направления &ndash;{" "}
            <Link to="/oljga_olyushina">Ольгой Олюшиной</Link>
          </p>
          <img
            src="/img/living-interior-design-and-decoration/kurator-olyushina.jpg"
            alt="куратор Ольга Олюшина"
            style={{
              borderRadius: "50%",
              width: 120,
              margin: "0 auto",
              border: "1px solid rgb(245,245,245)"
            }}
          />
          <p style={{ ...styles.text, paddingBottom: 0, paddingTop: 20 }}>
            <a href="tel:+79160346698">+7 916 034 66 98</a>
          </p>
          <p style={styles.text}>
            <a href="mailto:design@styleschool.ru">design@styleschool.ru</a>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
