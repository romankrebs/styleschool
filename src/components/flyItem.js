import React from "react";

import Fade from "react-reveal/Fade";
import { Grid, Button, /* IconButton, */ Paper } from "@material-ui/core";
import { Clear, Chat, ChevronLeft, Done } from "@material-ui/icons";

import { event } from "../analitics";

import { VerticalForm } from "./forms";
import TextBackComponent from "./textback";

export class FlyItem extends React.Component {
  state = {
    mounted: false,
    open: false,
    screen: "variants" // variants / form / social / chat / recall / thankyou
  };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  componentDidMount() {
    this.setState({ mounted: true });
    window.thankyou = this.thankyou;
  }

  componentDidUpdate(prevProps, prevState) {
    const { screen: ps, open: po } = prevState;
    const { screen: ns, open: no } = this.state;
    if (po !== no) {
      if (no) {
        event("fly-open");
      } else {
        event("fly-close");
      }
    }
    if (ns === "thankyou" && ps !== "thankyou") {
      event("thankyou");
    }
    if (ns !== ps) {
      event(`fly-screen-${ns}`);
    }
  }

  thankyou = () => this.setState({ open: true, screen: "thankyou" });

  render() {
    const { mounted, open, screen } = this.state;
    const {
      itemRef,
      style,
      props: { mode, text }
    } = this.props;

    return (
      <Paper
        ref={itemRef}
        onClick={!open ? this.open : undefined}
        elevation={10}
        style={{
          position: "absolute",
          zIndex: 9999,
          transition:
            "all 1s ease 0s, border-radius 0s ease 0s, opacity 1s ease 1s",
          boxSizing: "border-box",
          ...style,
          display: mounted ? "block" : "none",
          opacity: mounted ? 1 : 0,
          ...(!open
            ? {
                background: mode ? "red" : "rgb(255,128,0)", // "#fff",
                borderRadius: 50,
                textAlign: "center",
                display: "flex",
                color: "rgb(255,255,255)",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer"
              }
            : {
                position: "fixed",
                left: "initial",
                right: 0,
                top: 0,
                // width: `calc(100% - ${16 * 2}px)`,
                // height: `calc(100% - ${16 * 2}px)`,
                width: "100%",
                height: "100%",
                maxWidth: 500,
                background: "#fff",
                borderRadius: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "rgb(123, 143, 87) 0px 0px 0px 8px"
              })
        }}
      >
        {!open ? (
          <React.Fragment>
            <Fade>
              {text ? (
                <div style={{}}>{text}</div>
              ) : (
                <div
                  style={{
                    padding: 6,
                    width: 30,
                    height: 30,
                    position: "relative",
                    top: 4
                  }}
                >
                  <Chat />
                </div>
              )}
            </Fade>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div
              style={{
                height: "100%",
                width: "100%",
                overflowY: "scroll",
                overflowX: "hidden"
              }}
            >
              <div style={{ overflow: "hidden" }}>
                {screen !== "variants" && (
                  <Button
                    onClick={() => this.setState({ screen: "variants" })}
                    style={{ float: "left" }}
                  >
                    <ChevronLeft />
                  </Button>
                )}
                <Button onClick={this.close} style={{ float: "right" }}>
                  <Clear />
                </Button>
              </div>
              {screen === "variants" && (
                <Grid container spacing={0}>
                  <Grid item md={12}>
                    <Fade delay={0}>
                      <div style={{ paddingBottom: 16, textAlign: "center" }}>
                        <h4>Как удобнее общаться?</h4>
                        <Button
                          fullWidth
                          onClick={() => this.setState({ screen: "form" })}
                        >
                          Написать письмо
                        </Button>
                        <Button
                          fullWidth
                          onClick={() => this.setState({ screen: "social" })}
                        >
                          Мессенджеры, учебный отдел
                        </Button>
                        <Button
                          fullWidth
                          disabled
                          onClick={() => this.setState({ screen: "chat" })}
                        >
                          Чат
                        </Button>
                        <Button
                          fullWidth
                          disabled
                          onClick={() => this.setState({ screen: "recall" })}
                        >
                          Заказать обратный звонок
                        </Button>
                        <h4>или позвоните</h4>
                        <div>+7 495 221-89-35</div>
                        <div>8 800 550-78-93</div>
                      </div>
                    </Fade>
                  </Grid>
                </Grid>
              )}
              {screen === "social" && (
                <Grid
                  container
                  spacing={0}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={8}>
                    <Fade delay={0}>
                      <div style={{ paddingBottom: 16, textAlign: "center" }}>
                        <h4>
                          Корпоративный канал
                          <br />
                          учебного отдела ВШСДТ
                        </h4>
                        <div style={{ overflow: "hidden", paddingBottom: 16 }}>
                          <TextBackComponent />
                        </div>
                        <div>
                          <h3>
                            Персональные контакты специалистов учебного отдела
                            ВШСДТ
                          </h3>

                          <h4>Евгения Пименова</h4>
                          <div>(по вопросам зачисления)</div>
                          <div>+7 916 058-00-92</div>

                          <h4>Наталья Курилина</h4>
                          <div>(по вопросам очного обучения)</div>
                          <div>+7 916 058-00-91</div>

                          <h4>Александра Сырвачева</h4>
                          <div>
                            (по вопросам техподдержки дистанционного обучения)
                          </div>
                          <div>+7 916 058-00-13</div>
                        </div>
                      </div>
                    </Fade>
                  </Grid>
                </Grid>
              )}
              {screen === "form" && (
                <Grid container spacing={0}>
                  <Grid item md={12}>
                    <Fade delay={0}>
                      <div style={{ padding: 15 }}>
                        <VerticalForm />
                      </div>
                    </Fade>
                  </Grid>
                </Grid>
              )}
              {screen === "thankyou" && (
                <Grid
                  container
                  spacing={0}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item md={12} style={{ textAlign: "center" }}>
                    <Fade delay={0}>
                      <Done
                        style={{
                          width: 80,
                          height: 80,
                          color: "rgb(123, 143, 87)"
                        }}
                      />
                      <h2>Спасибо!</h2>
                      <h4>Ваша письмо отправлено</h4>
                    </Fade>
                  </Grid>
                </Grid>
              )}
            </div>
          </React.Fragment>
        )}
      </Paper>
    );
  }
}
