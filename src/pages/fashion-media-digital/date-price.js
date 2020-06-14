import React from "react";
import Grid from "@material-ui/core/Grid";

function Block(props) {
  var styles = {
    title: {
      fontSize: "1.5em",
      textAlign: "center",
      color: "rgb(123,143,87)",
      borderBottom: "3px solid rgb(123,143,87)",
      margin: "5px auto",
      padding: 5
    },
    datas: {
      fontSize: "1.1em",
      textAlign: "center",
      color: "rgb(80,80,80)",
      padding: 5,
      margin: 0
    },
    innerBox: {
      boxSizing: "border-box",
      padding: 20,
      textAlign: "center"
    },
    image: {
      height: 48
    }
  };
  return (
    <div style={styles.innerBox}>
      <img src={props.image} alt="" style={styles.image} />
      <h4 style={styles.title}>{props.title}</h4>
      <p style={styles.datas}>{props.string1}</p>
      <p style={styles.datas}>{props.string2}</p>
    </div>
  );
}

export default function Component() {
  var styles = {
    box: {
      background: "rgba(240,240,240,1)",
      padding: "10px 20px"
    }
  };
  return (
    <Grid container justify="center" alignItems="stretch" style={styles.box}>
      <Grid item xs={12} md={4}>
        <Block
          image="/img/green/clock.svg"
          title="ДЛИТЕЛЬНОСТЬ:"
          string1="96 академических часов"
          string2="3 месяца"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Block
          image="/img/green/cash-100.svg"
          title="СТОИМОСТЬ:"
          string1="10 900 руб. в месяц"
          string2="32 700 руб. за весь курс"
        />
      </Grid>
    </Grid>
  );
}
