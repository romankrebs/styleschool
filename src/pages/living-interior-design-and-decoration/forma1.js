import React from "react";
// import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { HorizontalForm } from "../../components/forms";
import { styles } from "./styles";
import Want from "../../components/want-to-know";

var wStyles = theme => styles;

function Forma(props) {
  var { classes } = props;

  return (
    <div>
      <h2 className={classes.h2}>Запишитесь на собеседование</h2>
      <p className={classes.pCenter}>
        Получите программу курса в мессенджер или на email
      </p>
      <p className={classes.pCenter}>
        Узнайте, как строится учебный процесс и практика
      </p>
      <HorizontalForm />
      {props.phones ? <Want noHead /> : null}
    </div>
  );
}

export default withStyles(wStyles)(Forma);
