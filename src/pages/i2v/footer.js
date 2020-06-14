import React from "react";
import { Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <div style={{ paddingTop: 24 }}>
      <Grid container justify="center">
        <Grid item xs={10} md={6}>
          <a href="https://styleschool.ru/" target="_blanck">
            <Grid container justify="center">
              <Grid item>
                <h2
                  style={{
                    fontSize: "1em",
                    fontFamily: "Lora",
                    fontWeight: 500,
                    textAlign: "right",
                    color: "rgb(100,100,100)",
                    margin: 0,
                    padding: 4
                  }}
                >
                  &copy;&ensp;&mdash;&ensp;
                </h2>
              </Grid>
              <Grid item>
                <h2
                  style={{
                    fontSize: "0.9em",
                    // fontFamily: "Lora",
                    fontWeight: 500,
                    textAlign: "center",
                    color: "rgb(100,100,100)",
                    margin: 0,
                    padding: 4,
                    lineHeight: "0.9em"
                  }}
                >
                  Высшая школа стилистики
                  <br />
                  дизайна и технологий
                </h2>
              </Grid>
              <Grid item>
                <img
                  src="/img/logo.png"
                  alt="Высшая школа стилистики, дизайна и технологий"
                  style={{ height: 32, marginBottom: -6 }}
                />
              </Grid>
            </Grid>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
