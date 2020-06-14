const styles = {
  root: {
    fontSize: 16
  },
  h1: {
    fontFamily: "Roboto",
    fontSize: "2.5em",
    fontWeight: 700,
    textAlign: "center",
    padding: "1em 0",
    margin: 0
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "1.4em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: "1.4em 0",
    paddingTop: "1.6em",
    margin: 0
  },
  h2inline: {
    fontFamily: "Roboto",
    fontSize: "1.4em",
    fontWeight: 700,
    color: "rgb(100,100,100)"
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "1.1em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: "1.1em 0",
    paddingTop: "1.3em",
    margin: 0
  },
  expandHead: {
    fontFamily: "Roboto",
    fontSize: "1.1em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: ".4em 1.4em",
    margin: 0,
    background: "rgb(248,248,248)"
  },
  p: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: 0,
    margin: 0,
    lineHeight: "1.5em"
  },
  expandText: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: 0,
    margin: 0,
    lineHeight: "1.5em",
    background: "rgb(252,252,252)"
  },
  p1: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "left",
    padding: 0,
    paddingTop: "1em",
    margin: 0,
    lineHeight: "1.5em"
  },
  descript: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "center",
    padding: 0,
    paddingTop: "1.4em",
    margin: 0,
    lineHeight: "1.5em"
  },
  pWidth: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)",
    textAlign: "justify",
    padding: 0,
    margin: 0,
    lineHeight: "1.5em"
  },
  fullscreen: {
    backgroundSize: "100% auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  fullscreenBox: {
    height: "calc(100vh - 35px - 4em)",
    maxWidth: 1000,
    padding: "2em",
    overflow: "hidden"
  },
  headBox: {
    padding: "0 1em",
    textAlign: "center",
    maxWidth: "100%",
    height: "calc(100vh - 35px - 12em)"
  },
  floatPadding: {
    paddingBottom: 0
  },
  info: {
    textAlign: "center",
    padding: "1em",
    fontFamily: "Roboto",
    fontSize: "0.9em",
    color: "rgb(100,100,100)",
    fontWeight: 400
  },
  imageRight: {
    paddingLeft: "1.4em"
  },
  "@media (max-width: 959px)": {
    h1: {
      fontSize: "1.4em"
    },
    h1bigPadding: {
      padding: "1em 0"
    },
    fullscreen: {
      backgroundSize: "100% auto"
    },
    fullscreenBox: {
      height: "auto" // "calc(100vh - 35px - 4em)"
    },
    headBox: {
      padding: 12,
      height: "auto",
      paddingBottom: "1em"
    },
    floatPadding: {
      paddingBottom: "1.4em"
    },
    imageRight: {
      paddingLeft: 0
    }
  },
  "@media (max-width: 499px)": {
    fullscreen: {
      backgroundSize: "auto 100%"
    }
  }
};

export default styles;
