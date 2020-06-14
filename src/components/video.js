import React from "react";
import YouTube from "react-youtube";
import { Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  video: {
    margin: "o auto"
  }
});

function _onReady(event) {
  event.target.pauseVideo();
}

function Videos(props) {
  const { classes } = props;

  return (
    <div style={props.style}>
      <Hidden smDown>
        <YouTube
          videoId={props.link}
          onReady={_onReady}
          opts={{ height: props.h, width: props.w }}
        />
      </Hidden>
      <Hidden mdUp>
        <YouTube
          videoId={props.link}
          onReady={_onReady}
          opts={{ height: 280, width: 280 }}
          className={classes.video}
        />
      </Hidden>
    </div>
  );
}

export default withStyles(styles)(Videos);
