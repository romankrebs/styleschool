import React from "react";

import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Socnet from "./socnet";

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
    color: "rgb(187,144,41)" // "rgb(229,183,101)"
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
              <h1 style={{ fontSize: 14, marginLeft: 12 }}>
                Высшая школа стилистики,
                <br />
                дизайна и технологий
              </h1>
            </Link>
          </Grid>
        </Grid>
        <List component="nav">
          <ListItem button value="shedule" component={Link} to="/shedule">
            <ListItemText
              primary="Расписание курсов"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="order" component={Link} to="/order">
            <ListItemText
              primary="Запись на обучение"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="about" component={Link} to="/about">
            <ListItemText
              primary="О школе"
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

        <List component="nav">
          <ListItem
            button
            value="styleschool"
            component={Link}
            to="/styleschool"
          >
            <ListItemText
              primary="Школа стиля"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="fashionschool"
            component={Link}
            to="/fashionschool"
          >
            <ListItemText
              primary="Школа моды"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="schoolofdesign"
            component={Link}
            to="/schoolofdesign"
          >
            <ListItemText
              primary="Школа дизайна"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="artschool" component={Link} to="/artschool">
            <ListItemText
              primary="Школа искусств"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem
            button
            value="schoolofmanagement"
            component={Link}
            to="/schoolofmanagement"
          >
            <ListItemText
              primary="Школа управления"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
        </List>

        <List component="nav">
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
              primary="Краткосрочные курсы"
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
              primary="Лекции и мастер-классы"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
          <ListItem button value="consulting" component={Link} to="/consulting">
            <ListItemText
              primary="Консалтинг"
              style={{ color: "rgb(103,123,67)" }}
            />
          </ListItem>
        </List>
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

    return (
      <React.Fragment>
        <div
          style={{
            position: "sticky",
            top: 0,
            background:
              "linear-gradient(rgba(0,0,0,1), rgba(20,20,20,1), rgba(0,0,0,1))",
            zIndex: 100,
            maxWidth: "100%",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              // background: "linear-gradient(rgba(10,50,10,1), rgba(10,60,10,1), rgba(10,50,10,1))",
              zIndex: 100,
              maxWidth: 1000,
              margin: "0 auto"
            }}
          >
            <LeftMenu
              open={this.state.switch}
              onClose={this.toggleMenu}
              onOpen={this.toggleMenu}
              classes={classes}
            />
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
                    <h1
                      className={classes.headerTitle}
                      style={{ textAlign: "center", fontSize: "0.85em" }}
                    >
                      <Link
                        to="/"
                        style={{
                          color: "rgb(187,144,41)" /*"rgb(229,183,101)"*/
                        }}
                      >
                        #ВШСДТ&ensp;|&ensp;
                      </Link>
                      {this.props.faqultet ? (
                        this.props.faqultet === "socnet" ? (
                          <span>
                            <Socnet color={this.props.colorSocnet} />
                          </span>
                        ) : (
                          this.props.faqultet
                        )
                      ) : null}
                    </h1>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill={this.props.colorSocnet}
                            d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                          />
                        </svg>
                      </Hidden>
                      <Hidden implementation="css" smDown>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill={this.props.colorSocnet}
                            d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                          />
                        </svg>
                      </Hidden>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TopMenu);
