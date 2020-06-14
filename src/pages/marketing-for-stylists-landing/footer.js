import React from "react";
import { Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <div style={{ paddingTop: 24 }}>
      <Grid container justify="center">
        <Grid item xs={10} md={6}>
          <a href="https://styleschool.ru/" target="_blanck">
            <h2
              style={{
                fontSize: "1em",
                fontFamily: "Lora",
                fontWeight: 500,
                textAlign: "center",
                color: "rgb(100,100,100)",
                margin: 0,
                padding: 4
              }}
            >
              &copy;&ensp;&mdash;&ensp; Высшая школа стилистики, дизайна и
              технологий&ensp;
              <img
                src="/img/logo.png"
                alt="Высшая школа стилистики, дизайна и технологий"
                style={{ height: 16, marginBottom: -2 }}
              />
            </h2>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
