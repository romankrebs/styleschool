import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { styles } from "./styles";
import { content } from "./top-datas";
import WantToKnow from "../../components/want-to-know";

function TopMasterKlass(props) {
  return (
    <div style={{ paddingBottom: "1.4em" }}>
      <Paper style={{ padding: "1.4em" }}>
        <Grid
          container
          alignItems="center"
          // style={{ background: "linear-gradient(rgb(250,250,250), rgb(255,255,255), rgb(250,250,250))" }}
        >
          <Grid item xs={12} md={5}>
            <h2 style={styles.date}>{content.date}</h2>
          </Grid>
          <Grid item xs={12} md={7}>
            <h2 style={styles.h2}>{content.title}</h2>
            <div
              style={{
                width: "60%",
                margin: "0 auto",
                height: 1,
                background: "rgb(100,100,100)"
              }}
            />
            <h3 style={{ ...styles.h3, textAlign: "center" }}>
              {content.descript}
            </h3>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            {content.content}
          </Grid>
          <Grid item xs={12} md={12}>
            <h2 style={styles.h2}>Для участия в лекции зарегистрируйтесь</h2>
            <WantToKnow noHead noSpace />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TopMasterKlass;
