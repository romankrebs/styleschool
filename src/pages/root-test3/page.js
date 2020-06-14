import React from "react";
import { Link } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";
import { stylesDark } from "./styles";
import { withStyles } from "@material-ui/styles";
import Footer from "./footer";
// import Slider from "./slider";
import Blocks from "./blocks";
import { content } from "./contents";
import Message from "../../components/button-messages";
import { Vk, Facebook, Instagram, Youtube, Path, Login2 } from "./icons";

const wStyles = theme => stylesDark;
const font = "Alegreya Sans";
const sizeLeftPanel = 320;

function Top(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const MobileLeft = props => {
    return (
      <React.Fragment>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            background: "rgb(255,255,255)",
            padding: "2rem",
            paddingBottom: 0
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              paddingBottom: 0,
              background: "rgb(0,0,0)"
            }}
          >
            <img
              src="/img/root-test2/emblem-black.png"
              alt="Высшая школа стилистики, дитзайна и технологий"
              style={{
                maxWidth: "100%"
              }}
            />
            <div style={{ height: "3rem" }} />
            <div className={classes.icons}>
              <a href="https://www.instagram.com/styleschool_msk/">
                <Instagram color="rgb(200,200,200)" size="16px" />
              </a>
              &ensp;
              <a href="https://vk.com/stylemsk">
                <Vk color="rgb(200,200,200)" size="24px" width="1.2" />
              </a>
              &ensp;
              <a href="https://www.facebook.com/styleschool.ru/">
                <Facebook color="rgb(200,200,200)" size="16px" />
              </a>
              &ensp;
              <a href="https://www.youtube.com/channel/UC8ByVFm0GkcauK5h_t2BTwQ">
                <Youtube color="rgb(200,200,200)" size="20px" />
              </a>
              &ensp;
              <img
                src="/img/root-test2/vshsdt.png"
                alt="#ВШСДТ"
                style={{
                  height: 14 // 18
                }}
              />
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  };

  const MobileRight = props => {
    return (
      <React.Fragment>
        <Grid
          item
          xs={12}
          md={6}
          style={{ background: "rgb(255,255,255)" /* paddingTop: "2rem" */ }}
        >
          <div
            className={classes.nameSchool}
            style={{
              fontFamily: "PT Sans Narrow", // "Alice",
              opacity: open ? 0.5 : 1,
              transition: "0.5s opacity"
              // minWidth: 600,
              // background: "linear-gradient(to right, rgb(255,255,255) 0, rgb(255,255,255) 400px, rgb(0,0,0) 400px, rgb(0,0,0) 500px)"
            }}
          >
            Высшая школа стилистики,
            <br />
            дизайна и технологий
          </div>
          <div
            className={classes.descriptSchool}
            style={{
              fontFamily: font
            }}
          >
            Профессиональное образование и<br />
            повышение квалификации в индустрии моды и дизайна
          </div>
          {/* <div
            className={classes.scroll}
            style={{
              fontFamily: font
            }}
          >
            <Path color="rgb(100,100,100)" size={32} />
            &ensp;&ensp; прокрутите вниз
          </div> */}
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <div>
      {/* контент главной страницы */}
      <div
        style={{
          filter: open ? "blur(5px)" : "blur(0px)",
          transition: "0.5s filter"
        }}
      >
        {/* верхняя полоса */}
        <div className={classes.topLine}>
          <div
            className={classes.topBox}
            style={{
              filter: open ? "blur(2px)" : "blur(0px)",
              transition: "0.5s filter"
            }}
          >
            <span onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
              <svg
                style={{ marginBottom: "-0.5rem" }}
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgb(250,250,250)"
                  d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                />
              </svg>
              &ensp;
              <span
                style={{
                  fontFamily: font,
                  fontSize: "0.9rem",
                  color: "rgb(230,230,230)",
                  fontWeight: 600
                }}
              >
                меню
              </span>
            </span>
            {/* <div
              style={{
                position: "absolute",
                left: "calc(50% - 3rem)",
                top: "0.5rem",
                fontFamily: font,
                fontWeight: 600,
                color: "rgb(187, 144, 41)", // "rgb(240,240,240)",
                textAlign: "center",
                fontSize: "0.9rem"
              }}
            >
              #ВШСДТ
            </div> */}
            <div className={classes.login}>
              <a href="https://billing.styleschool.ru/">
                <Login2 color="rgb(240,240,240)" size="1rem" />
              </a>
            </div>
          </div>
        </div>
        {/* конец верхней полосы */}

        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Grid container justify="space-between" alignItems="stretch">
            <Hidden smDown>
              <Grid
                item
                md={12}
                style={{ height: "2rem", background: "rgb(255,255,255)" }}
              />
              <Grid
                item
                md={6}
                style={{
                  backgroundImage:
                    "url('/img/root-test2/emblem-black.png'),linear-gradient(rgb(0,0,0),rgb(0,0,0))",
                  // "url('/img/root-test2/emblem-black.png'),linear-gradient(to right, rgb(255,255,255) 0, rgb(255,255,255) 460px, rgb(0,0,0) 460px, rgb(0,0,0) 1000px)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top 103px right 120px, left center",
                  backgroundSize: "auto 320px, 100%"
                }}
              />
              <Grid item md={6}>
                <div
                  className={classes.nameSchool}
                  style={{
                    fontFamily: "PT Sans Narrow", // "Alice",
                    opacity: open ? 0.5 : 1,
                    transition: "0.5s opacity",
                    fontSize: "3.7rem",
                    textShadow: "4px 4px 0px rgba(0,0,0,0.15)",
                    textAlign: "right"
                  }}
                >
                  Высшая школа стилистики,
                  <br />
                  дизайна и технологий
                </div>
              </Grid>
              <Grid
                item
                md={6}
                style={{
                  background: "rgb(0,0,0)"
                }}
              >
                <div
                  className={classes.icons}
                  style={{ textAlign: "left", paddingLeft: "1rem" }}
                >
                  <a href="https://www.instagram.com/styleschool_msk/">
                    <Instagram color="rgb(200,200,200)" size="16px" />
                  </a>
                  &ensp;
                  <a href="https://vk.com/stylemsk">
                    <Vk color="rgb(200,200,200)" size="24px" width="1.2" />
                  </a>
                  &ensp;
                  <a href="https://www.facebook.com/styleschool.ru/">
                    <Facebook color="rgb(200,200,200)" size="16px" />
                  </a>
                  &ensp;
                  <a href="https://www.youtube.com/channel/UC8ByVFm0GkcauK5h_t2BTwQ">
                    <Youtube color="rgb(200,200,200)" size="20px" />
                  </a>
                  &ensp;
                  <img
                    src="/img/root-test2/vshsdt.png"
                    alt="#ВШСДТ"
                    style={{
                      height: 14
                    }}
                  />
                </div>
              </Grid>
              <Grid item md={6}>
                <div
                  className={classes.descriptSchool}
                  style={{
                    fontFamily: font,
                    textAlign: "right",
                    paddingTop: 0
                  }}
                >
                  Профессиональное образование и<br />
                  повышение квалификации в индустрии моды и дизайна
                </div>
              </Grid>
              {/* <Grid
                item
                md={12}
                style={{
                  background: "rgb(255,255,255)"
                }}
              >
                <div
                  className={classes.scroll}
                  style={{
                    fontFamily: font
                  }}
                >
                  <Path color="rgb(100,100,100)" size={32} />
                </div>
              </Grid> */}
            </Hidden>
            <Hidden mdUp>
              <MobileLeft />
              <MobileRight />
            </Hidden>
            <Grid item xs={12} md={12}>
              <Blocks
                left={content.screen1.left}
                right={content.screen1.right}
                styleBox={{
                  paddingTop: "6rem"
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Blocks
                left={content.screen2.left}
                right={content.screen2.right}
                styleBox={{
                  paddingTop: "6rem",
                  paddingBottom: "6rem"
                }}
                mobileReverse
              />
            </Grid>
            {/* <Grid item xs={12} md={12}>
              <Slider slides={content.images} hSize={300} />
            </Grid> */}
          </Grid>
        </div>
      </div>
      <div
        style={{
          filter: open ? "blur(3px)" : "blur(0)",
          transition: "0.5s filter"
        }}
      >
        <Footer />
      </div>
      <Message />
      {/* конец контента главной страницы */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: open ? "100vw" : 0,
          height: open ? "100vh" : 0,
          background: "rgba(0,0,0,0.5)",
          overflow: "hidden"
        }}
        onClick={() => setOpen(false)}
      />
      <div
        style={{
          height: "100vh",
          boxSizing: "border-box",
          width: sizeLeftPanel,
          position: "fixed",
          top: 0,
          left: open ? 0 : -sizeLeftPanel,
          transition: "0.5s left",
          background: "rgba(0,0,0,0.8)",
          padding: "1rem",
          paddingLeft: "2rem",
          lineHeight: "2rem"
        }}
        onClick={() => {
          setOpen(false);
        }}
      >
        <Grid container justify="space-evenly" alignItems="center" spacing={2}>
          <Grid item xs={3} md={3}>
            <img
              src="/img/root-test2/regicon.png"
              alt="ВШСДТ"
              style={{
                width: 38,
                margin: "1rem",
                marginLeft: 0
              }}
            />
          </Grid>
          <Grid item xs={9} md={9} style={{ lineHeight: "1rem" }}>
            <Link to="/">
              <span
                style={{
                  fontFamily: "PT Sans Narrow", //"Alice",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "rgb(187,144,41)" // "rgb(200,200,200)"
                }}
              >
                Высшая школа стилистики,
                <br />
                дизайна и технологий
              </span>
            </Link>
          </Grid>
        </Grid>
        <div style={{ height: "20vh" }} />
        <Link to="/shedule">
          <span className={classes.topLink}>Расписание курсов</span>
        </Link>
        <br />
        <Link to="/order">
          <span className={classes.topLink}>Запись на обучение</span>
        </Link>
        <br />
        <Link to="/about">
          <span className={classes.topLink}>О школе</span>
        </Link>
        <br />
        <Link to="/contacts">
          <span className={classes.topLink}>Контакты</span>
        </Link>
        <div
          style={{
            height: 1,
            background: "rgb(100,100,100)",
            width: 200,
            margin: "1rem",
            marginLeft: 0
          }}
        />
        <Link to="/second-degree-imagemaker">
          <span className={classes.topLink}>Долгосрочные курсы</span>
        </Link>
        <br />
        <Link to="/interior-design">
          <span className={classes.topLink}>Краткосрочные курсы</span>
        </Link>
        <br />
        <Link to="/master-class">
          <span className={classes.topLink}>Лекции и мастер-классы</span>
        </Link>
      </div>
    </div>
  );
}

export default withStyles(wStyles)(Top);
