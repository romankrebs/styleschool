import React from "react";

import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Menu from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  headerTitle: {
    fontSize: 24,
    fontFamily: "Roboto Slab",
    "@media(max-width: 1025px)": {
      fontSize: 18
    },
    "@media(max-width: 325px)": {
      fontSize: 14
    }
  },

  avatar: {
    width: 35,
    height: 40,
    "@media(max-width: 1025px)": {
      width: 30,
      height: 35
    },
    "@media(max-width: 325px)": {
      width: 20,
      height: 25
    }
  },

  leftMenuContent: {
    width: "100vw",
    maxWidth: 300
  },

  burgerButton: {
    height: 49,
    "@media(max-width: 325px)": {
      height: 36
    }
  }
});

function LeftMenu(props) {
  return (
    <div>
      <SwipeableDrawer
        open={props.open}
        onOpen={props.onOpen}
        onClose={props.onClose}
      >
        <div className={props.classes.leftMenuContent} />
        <Grid
          item
          spacing={1}
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          style={{ padding: "11px 16px" }}
        >
          <Grid item md={1}>
            <Link to="/">
              <Avatar
                alt="Логотип Высшей Школы Стилистики"
                src="/img/logo.png"
                style={{ width: 25, height: 30 }}
              />
            </Link>
          </Grid>
          <Grid item md={11}>
            <Link to="/" style={{ color: "rgb(80,80,80)" }}>
              <h1 style={{ fontSize: 14 }}>
                Высшая школа стилистики,
                <br />
                дизайна и технологий
              </h1>
            </Link>
          </Grid>
        </Grid>
        <List component="nav">
          <ListItem button value="about" component={Link} to="/about">
            <ListItemText
              primary="О школе"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="order" component={Link} to="/order">
            <ListItemText
              primary="Запись на обучение"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="contacts" component={Link} to="/contacts">
            <ListItemText
              primary="Контакты"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
        </List>
        <Divider variant="middle" />
        <Hidden implementation="css" mdUp>
          <List component="nav">
            <ListItem button value="shedule" component={Link} to="/shedule">
              <ListItemText
                primary="Расписание"
                style={{ color: "rgb(103,123,67)" }}
              />
            </ListItem>
            <ListItem button value="training" component={Link} to="/training">
              <ListItemText
                primary="Профподготовка"
                style={{ color: "rgb(103,123,67)" }}
              />
            </ListItem>
            <ListItem
              button
              value="special-courses"
              component={Link}
              to="/special-courses"
            >
              <ListItemText
                primary="Курсы"
                style={{ color: "rgb(103,123,67)" }}
              />
            </ListItem>
            <ListItem
              button
              value="modern-fashion-style"
              component={Link}
              to="/modern-fashion-style"
            >
              <ListItemText
                primary="Мастер-классы"
                style={{ color: "rgb(103,123,67)" }}
              />
            </ListItem>
            {/* <ListItem
              button
              value="consulting"
              component={Link}
              to="/consulting"
            >
              <ListItemText primary="Консалтинг" />
            </ListItem> */}
          </List>
        </Hidden>
      </SwipeableDrawer>
    </div>
  );
}

class TopMenu extends React.Component {
  state = {
    switch: false
  };

  toggleMenu = () => {
    this.setState({ switch: !this.state.switch });
  };

  render() {
    const { classes } = this.props;

    const SecondMenu = justify => {
      return (
        <Grid
          container
          direction="row"
          justify={justify}
          alignItems="center"
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          <Grid item>
            <Tabs>
              <Tab
                value="shedule"
                component={Link}
                to="/shedule"
                label={
                  <Grid container spacing={1} direction="row" justify="center">
                    <Grid item>
                      <CalendarToday style={{ color: "rgb(103,123,67)" }} />
                    </Grid>
                    <Grid
                      item
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textTransform: "none",
                        fontSize: "1.4em",
                        color: "rgb(103,123,67)"
                      }}
                    >
                      <span>Расписание</span>
                    </Grid>
                  </Grid>
                }
              />
              <Tab
                value="training"
                label="Профподготовка"
                component={Link}
                to="/training"
                style={{
                  minWidth: 0,
                  textTransform: "none",
                  fontSize: "1.2em",
                  color: "rgb(103,123,67)"
                }}
              />
              <Tab
                value="special-courses"
                label="Курсы"
                component={Link}
                to="/special-courses"
                style={{
                  minWidth: 0,
                  textTransform: "none",
                  fontSize: "1.2em",
                  color: "rgb(103,123,67)"
                }}
              />
              <Tab
                value="modern-fashion-style"
                label="Мастер-классы"
                component={Link}
                to="/modern-fashion-style"
                style={{
                  minWidth: 0,
                  textTransform: "none",
                  fontSize: "1.2em",
                  color: "rgb(103,123,67)"
                }}
              />
              {/* <Tab
                value="consulting"
                component={Link}
                to="/consulting"
                label="Консалтинг"
                style={{ minWidth: 0, textTransform: "none" }}
              /> */}
            </Tabs>
          </Grid>
        </Grid>
      );
    };

    return (
      <React.Fragment>
        <div
          style={{
            position: "sticky",
            top: 0,
            background: "rgba(255,255,255,0.8)",
            zIndex: 100
          }}
        >
          <LeftMenu
            open={this.state.switch}
            onClose={this.toggleMenu}
            onOpen={this.toggleMenu}
            classes={classes}
          />
          <Hidden implementation="css" mdDown>
            <Grid
              container
              className={classes.root}
              style={{ maxWidth: 1100, margin: "0 auto" }}
            >
              <Grid
                item
                lg={9}
                spacing={1}
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                style={{ paddingLeft: 20 }}
              >
                <Grid item>
                  <Link to="/">
                    <Avatar
                      alt="Логотип Высшей Школы Стилистики"
                      src="/img/logo.png"
                      className={classes.avatar}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/">
                    <h1
                      className={classes.headerTitle}
                      style={{ color: "rgb(103,123,67)" }}
                    >
                      Высшая школа стилистики,
                      <br />
                      <span style={{ fontSize: "0.8em" }}>
                        дизайна и технологий
                      </span>
                    </h1>
                  </Link>
                </Grid>
                <Grid item>
                  <Tabs style={{ display: "flex" }}>
                    <Tab
                      value="about"
                      component={Link}
                      to="/about"
                      label="О школе"
                      style={{
                        minWidth: 0,
                        textTransform: "none",
                        fontSize: "1.2em",
                        color: "rgb(103,123,67)"
                      }}
                    />
                    <Tab
                      value="order"
                      component={Link}
                      to="/order"
                      label="Запись на обучение"
                      style={{
                        minWidth: 0,
                        textTransform: "none",
                        fontSize: "1.2em",
                        color: "rgb(103,123,67)"
                      }}
                    />
                    <Tab
                      value="contacts"
                      component={Link}
                      to="/contacts"
                      label="Контакты"
                      style={{
                        minWidth: 0,
                        textTransform: "none",
                        fontSize: "1.2em",
                        color: "rgb(103,123,67)"
                      }}
                    />
                  </Tabs>
                </Grid>
              </Grid>
              <Grid
                item
                lg={3}
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Hidden implementation="css" mdDown>
                    <Tabs
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Tab
                        value=""
                        label="8 800 550-78-93"
                        style={{
                          minWidth: 0,
                          textTransform: "none",
                          fontSize: "1.2em"
                        }}
                      />
                    </Tabs>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden implementation="css" lgUp>
            <Grid
              container
              className={classes.root}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <div style={{ position: "absolute", left: 0, top: 0 }}>
                <Button
                  onClick={this.toggleMenu}
                  className={classes.burgerButton}
                >
                  <Menu />
                </Button>
              </div>
              <Grid item>
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Link to="/">
                      <Avatar
                        alt="Логотип Высшей Школы Стилистики"
                        src="/img/logo.png"
                        className={classes.avatar}
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/" style={{ color: "rgb(80,80,80)" }}>
                      <h1
                        className={classes.headerTitle}
                        style={{ textAlign: "left", fontSize: "0.9em" }}
                      >
                        <Hidden implementation="css" smDown>
                          Высшая школа стилистики
                          <br />
                          <span style={{ fontSize: "0.7em" }}>
                            дизайна и технологий
                          </span>
                        </Hidden>
                        <Hidden implementation="css" mdUp>
                          ВШСДТ
                        </Hidden>
                      </h1>
                    </Link>
                  </Grid>
                  <div
                    style={{
                      position: "absolute",
                      right: 20,
                      top: 10,
                      textAlign: "center",
                      lineHeight: "0.8em"
                    }}
                  >
                    <a href="https://billing.styleschool.ru">
                      <Hidden implementation="css" mdUp>
                        <img
                          src="/img/green/account.svg"
                          alt="Войти в личный кабинет"
                          style={{ height: 24 }}
                        />
                      </Hidden>
                      <Hidden implementation="css" smDown>
                        <img
                          src="/img/green/account.svg"
                          alt="Войти в личный кабинет"
                          style={{ height: 20 }}
                        />
                        <br />
                        <span
                          style={{
                            fontSzie: "0.5em",
                            color: "rgb(123,143,87)"
                          }}
                        >
                          войти
                        </span>
                      </Hidden>
                    </a>
                  </div>
                </Grid>
                <Hidden implementation="css" mdDown>
                  <Grid item>
                    <Tabs style={{ display: "flex" }}>
                      <Tab
                        value="about"
                        component={Link}
                        to="/about"
                        label="О школе"
                        style={{
                          minWidth: 0,
                          textTransform: "none",
                          fontSize: "1.2em",
                          color: "rgb(103,123,67)"
                        }}
                      />
                      <Tab
                        value="order"
                        component={Link}
                        to="/order"
                        label="Запись на обучение"
                        style={{
                          minWidth: 0,
                          textTransform: "none",
                          fontSize: "1.2em",
                          color: "rgb(103,123,67)"
                        }}
                      />
                      <Tab
                        value="contacts"
                        component={Link}
                        to="/contacts"
                        label="Контакты"
                        style={{
                          minWidth: 0,
                          textTransform: "none",
                          fontSize: "1.2em",
                          color: "rgb(103,123,67)"
                        }}
                      />
                    </Tabs>
                  </Grid>
                </Hidden>
              </Grid>
              <Grid
                item
                lg={3}
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Hidden implementation="css" lgDown>
                    <Tabs
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Tab
                        value=""
                        label="8 800 550-78-93"
                        style={{
                          minWidth: 0,
                          textTransform: "none",
                          fontSize: "1.2em"
                        }}
                      />
                    </Tabs>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </div>
        <div style={{ background: "rgba(255,255,255,0.8)" }}>
          <Hidden implementation="css" smDown lgUp>
            {SecondMenu("center")}
          </Hidden>
          <Hidden implementation="css" mdDown>
            {SecondMenu("flex-end")}
          </Hidden>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TopMenu);
