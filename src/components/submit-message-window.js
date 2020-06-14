import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

var styles = theme => ({
  blackBlock: {
    background: "rgba(0,0,0,0.5)",
    height: "100vh",
    width: "100vw",
    paddingLeft: "calc(50vw - 100px)",
    paddingTop: "calc(50vh - 100px)",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1000,
    display: "block"
  },
  messageBox: {
    padding: "1em",
    background: "rgb(255,255,255)"
  },
  message: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: "1.4em",
    fontWeight: 400,
    color: "rgb(100,100,100)"
  },
  closed: {
    display: "none"
  }
});

class MessageWindow extends React.Component {
  state = {
    open: false
  };
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    var { classes } = this.props;

    return (
      <div className={this.state.open ? classes.blackBlock : classes.closed}>
        <Paper className={classes.messageBox}>
          <Grid container>
            <Grid item xs={12} md={12} style={{ textAlign: "right" }}>
              <img
                src="/img/close-circle-outline.svg"
                style={{
                  height: "2em",
                  width: "2em",
                  opacity: 0.7
                }}
                alt="Закрыть"
                onClick={this.toggleOpen}
              />
            </Grid>
            <Grid item>
              <p className={classes.message}>Спасибо!</p>
              <p className={classes.message}>Ваше сообщение отправлено.</p>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MessageWindow);
