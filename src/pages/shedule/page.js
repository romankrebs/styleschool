import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Man from "./man";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  box: {
    padding: 0
  },
  "@media (max-width: 959px)": {
    box: {
      padding: "0 10px"
    }
  }
});

const Page = props => {
  const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>Расписание</title>
        <meta name="keywords" content="ВШС: Расписание" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Расписание" />
        <Grid
          container
          alignItems="flex-start"
          spacing={3}
          className={classes.box}
        >
          <Grid item xs={12} md={12}>
            <h2
              style={{
                fontFamily: "inherit",
                fontSize: "1.6em",
                fontWeight: 700,
                textAlign: "left",
                color: "rgb(80,80,80)"
              }}
            >
              {props.head}
            </h2>
            <p
              style={{
                fontFamily: "inherit",
                fontSize: "1em",
                fontWeight: 400,
                textAlign: "left",
                color: "rgb(100,100,100)"
              }}
            >
              {props.descript}
            </p>
          </Grid>
          <Grid item xs={12} md={7}>
            {props.content}
          </Grid>
          <Grid item xs={12} md={5}>
            <Man index={props.index} inner={props.inner} />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Page);
