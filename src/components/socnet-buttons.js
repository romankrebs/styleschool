import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const content = {
  vk: {
    image: "/img/vk_color.svg",
    color: "rgb(81,129,184)",
    text: "Получать уведомления",
    link: ""
  },
  facebook: {
    image: "/img/facebook_color.svg",
    color: "rgb(59,89,152)",
    text: "Подписаться в Facebook",
    link:
      "https://m.me/203865566363088?ref=subscribe_cda4daa5-8724-18e3-2095-016955c0a5a1"
  },
  telegram: {
    image: "/img/telegram_color.svg",
    color: "rgb(30,150,200)",
    text: "Подписаться в Telegram",
    link:
      "https://telegram.me/Styleschool_bot?start=subscribe_cda4daa5-8724-18e3-2095-016955c0a5a1"
  },
  viber: {
    image: "/img/viber.svg",
    color: "rgb(89,38,124)",
    text: "Подписаться в Viber",
    link:
      "viber://pa?chatURI=styleschool&context=subscribe_cda4daa5-8724-18e3-2095-016955c0a5a1"
  }
};

function ButtonSN(props) {
  return (
    <Grid container alignItems="center" style={{ padding: 10, maxWidth: 300 }}>
      <Grid item xs={3} md={3}>
        <a href={props.link}>
          <img src={props.image} alt="" style={{ height: 36 }} />
        </a>
      </Grid>
      <Grid item xs={8} md={8}>
        <a href={props.link}>
          <Paper
            style={{
              background: props.bg,
              padding: 10,
              color: "rgb(255,255,255)",
              fontSize: "12px",
              fontFamily: "Roboto",
              textAlign: "center"
            }}
          >
            {props.text}
          </Paper>
        </a>
      </Grid>
    </Grid>
  );
}

export default function SocnetsButtons(props) {
  // const classes = styles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <ButtonSN
          image={content.facebook.image}
          bg={content.facebook.color}
          text={content.facebook.text}
          link={content.facebook.link}
        />
        <ButtonSN
          image={content.telegram.image}
          bg={content.telegram.color}
          text={content.telegram.text}
          link={content.telegram.link}
        />
        <ButtonSN
          image={content.viber.image}
          bg={content.viber.color}
          text={content.viber.text}
          link={content.viber.link}
        />
        <ButtonSN
          image={content.vk.image}
          bg={content.vk.color}
          text={content.vk.text}
          link={content.vk.link}
        />
      </Grid>
    </Grid>
  );
}
