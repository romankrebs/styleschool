import React from "react";
import Helmet from "react-helmet";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import TopMasterKlass from "./top-master-klass";
import { styles } from "./styles";

const wStyles = theme => styles;
const name = "Лекции и мастер-классы";

function MasterKlass(props) {
  const { classes } = props;
  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "0 auto"
      }}
    >
      <Helmet>
        <title>{name}</title>
        <meta name="keyword" content={"ВШСДТ: " + name} />
      </Helmet>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Top faqultet="Лекции и мастер-классы" />
          <h1 className={classes.h1}>{name}</h1>
          <TopMasterKlass />
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(MasterKlass);
