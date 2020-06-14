import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";
import Kettle from "./kettle";
import Hummer from "./hummer";
import IconText from "./icon-head-text";

var wStyles = theme => styles;

function WillDo(props) {
  var { classes } = props;

  return (
    <div>
      <Grid container spacing={2} style={{ padding: "1em" }}>
        <Grid item xs={12} md={6}>
          <h2 className={classes.h2block}>
            Курс
            <br />
            подойдет
          </h2>
        </Grid>
        <Grid item xs={12} md={6} style={{ paddingTop: "1.6rem" }}>
          <IconText
            icon={<Kettle size="32px" color="rgb(100,100,100)" />}
            head="Новичкам"
            text="Вы сможете работать и учиться в комфортных условиях, с удобным графиком Будете развиваться как дизайнер студии или на фрилансе, выполнять реальные заказы. Узнаете, где и как искать клиентов и составите портфолио с нашей помощью."
          />
          <IconText
            icon={<Hummer size="32px" color="rgb(100,100,100)" />}
            head="Тем, кто делает ремонт"
            text="Вы создадите интерьер своей мечты, при этом сэкономите до 50% затрат на ремонт. Сможете контролировать стандарты выполнения работ в процессе ремонта. После обучения сможете помогать друзьям и знакомым как профессиональный дизайнер."
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(WillDo);
