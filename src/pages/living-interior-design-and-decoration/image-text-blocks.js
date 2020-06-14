import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

var wStyles = theme => styles;

function Image(props) {
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        <Link to={props.link}>
          <img
            src={props.image}
            style={{
              maxHeight: 250
            }}
            alt={props.head}
          />
        </Link>
      </p>
      <h3 style={{ ...styles.h3, textAlign: "center" }}>{props.head}</h3>
    </div>
  );
}

function ImageText(props) {
  /* props:
  head — заголовок
  texts — массив абзацев
  image — url изображения
  bkg — общий фон
  imgOnTheLeft — задает расположение картинки слева, а текста — справа
  illustration — картинка в виде иллюстрации с заголовком и ссылкой
  */

  var { classes } = props;

  return (
    <div style={{ padding: "1em 0" }}>
      <Grid container style={{ background: props.bkg }} spacing={2}>
        <Hidden mdUp>
          <Grid item xs={12}>
            <h3 className={classes.h3}>{props.head}</h3>
            {props.texts.map((text, key) => (
              <p className={classes.p} key={key}>
                {text}
              </p>
            ))}
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            {props.illustration ? (
              <Image
                head={props.illHead}
                image={props.image}
                link={props.link}
              />
            ) : (
              <img src={props.image} alt="" style={{ maxHeight: 250 }} />
            )}
          </Grid>
        </Hidden>
        <Hidden smDown>
          {props.imgOnTheLeft ? (
            <React.Fragment>
              {props.illustration ? (
                <Grid item xs={6} md={6}>
                  <Image
                    head={props.illHead}
                    image={props.image}
                    link={props.link}
                  />
                </Grid>
              ) : (
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{
                    background: `url(${
                      props.image
                    }) bottom center / auto 90% no-repeat`
                  }}
                />
              )}
              <Grid item xs={6} md={6}>
                <h3 className={classes.h3}>{props.head}</h3>
                {props.texts.map((text, key) => (
                  <p className={classes.p} key={key}>
                    {text}
                  </p>
                ))}
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item xs={6} md={6}>
                <h3 className={classes.h3}>{props.head}</h3>
                {props.texts.map((text, key) => (
                  <p className={classes.p} key={key}>
                    {text}
                  </p>
                ))}
              </Grid>
              {props.illustration ? (
                <Grid item xs={6} md={6}>
                  <Image
                    head={props.illHead}
                    image={props.image}
                    link={props.link}
                  />
                </Grid>
              ) : (
                <Grid
                  item
                  xs={6}
                  md={6}
                  style={{
                    background: `url(${
                      props.image
                    }) bottom center / auto 90% no-repeat`
                  }}
                />
              )}
            </React.Fragment>
          )}
        </Hidden>
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(ImageText);
