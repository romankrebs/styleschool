import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Blocks from "../../components/info-block-for-types";
import { styles } from "./styles";

var wStyles = theme => styles;

function InfoBlock(props) {
  var { classes } = props;
  return (
    <div>
      <h2 className={classes.h2}>Если вы хотите</h2>
      <Grid container justify="space-between" alignItems="center" spacing={2}>
        <Grid item xs={12} md={3}>
          <Hidden smDown implementation="css">
            <Blocks
              text={
                <span>
                  Освоить актуальную и креативную профессию
                  <br />
                  &ensp;
                </span>
              }
            />
          </Hidden>
          <Hidden mdUp implementation="css">
            <Blocks
              text={<span>Освоить актуальную и креативную профессию</span>}
            />
          </Hidden>
        </Grid>
        <Grid item xs={12} md={3}>
          <Blocks
            text={
              <span>
                Найти 900+ подходящих вакансий с зарплатой от&nbsp;60&nbsp;000
                рублей
              </span>
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Blocks
            text={
              <span>
                Сэкономить деньги и несколько лет жизни на&nbsp;обучении
              </span>
            }
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Hidden smDown implementation="css">
            <Blocks
              text={
                <span>
                  Выполнять проекты в России и зарубежом
                  <br />
                  &ensp;
                </span>
              }
            />
          </Hidden>
          <Hidden mdUp implementation="css">
            <Blocks
              text={<span>Выполнять проекты в России и зарубежом</span>}
            />
          </Hidden>
        </Grid>
      </Grid>
      <p
        className={classes.pCenter}
        style={{ fontWeight: 700, paddingTop: "2.8em" }}
      >
        Пройдите курс по дизайну и декорированию интерьеров и сделайте свой 1-ый
        проект для заказчика во время обучения!
      </p>
    </div>
  );
}

export default withStyles(wStyles)(InfoBlock);
