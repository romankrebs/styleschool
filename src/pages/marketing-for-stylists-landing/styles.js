import { makeStyles } from "@material-ui/styles";

export const fontNames = {
  futuristic: "Futura-Normal",
  grotesk: "Roboto",
  classic: "Lora"
};

export const colors = {
  dark: "rgb(18,31,63)",
  light: "rgb(209,216,234)",
  middle1: "rgb(39,70,116)",
  middle2: "rgb(34,92,103)",
  middle3: "rgb(84,126,168)",
  darkTrans: "rgba(18,31,63,0.2)",
  lightTrans: "rgba(209,216,234,0.4)",
  middle1Trans: "rgba(39,70,116,0.2)",
  middle2Trans: "rgba(34,92,103,0.2)",
  middle3Trans: "rgba(84,126,168,0.1)",
  white: "rgb(255,255,255)",
  black: "rgb(0,0,0)",
  gray: "rgb(100,100,100)"
};

export const styles = {
  head: {
    padding: 42
  },
  digitals: {
    background: colors.light,
    fontFamily: fontNames.futuristic,
    fontWeight: 700,
    fontSize: "1.1em",
    textAlign: "left",
    lineHeight: "1.4em",
    color: colors.dark,
    padding: 20,
    paddingLeft: "30%",
    borderLeft: "24px solid " + colors.middle2
  },
  speaker: {
    background: colors.light,
    fontFamily: fontNames.futuristic,
    fontWeight: 700,
    fontSize: "1.1em",
    textAlign: "right",
    lineHeight: "1.4em",
    color: colors.dark,
    padding: 20,
    paddingRight: "30%",
    borderRight: "24px solid " + colors.middle2
  },
  titleProgramma: {
    color: colors.dark,
    fontFamily: fontNames.futuristic,
    fontSize: "1em",
    fontWeight: 700,
    textAlign: "left",
    margin: 0,
    padding: 8,
    paddingLeft: 24,
    background: colors.middle2Trans
  },
  listProgramma: {
    color: colors.dark,
    fontFamily: fontNames.futuristic,
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "left",
    margin: 0,
    padding: 8,
    background: colors.lightTrans
  },
  h1: {
    fontFamily: fontNames.futuristic,
    fontSize: "1.8em",
    fontWeight: 700,
    textAlign: "center",
    margin: 0,
    padding: "24px 12px"
  },
  h2: {
    fontFamily: fontNames.futuristic,
    fontSize: "1.6em",
    fontWeight: 700,
    textAlign: "center",
    margin: 0,
    padding: "32px 8px"
  },
  h3: {
    fontFamily: fontNames.futuristic,
    fontSize: "1.4em",
    fontWeight: 500,
    textAlign: "center",
    margin: 0,
    padding: "12px 0"
  },
  h4: {
    fontFamily: fontNames.futuristic,
    fontSize: "1.1em",
    fontWeight: 700,
    textAlign: "center",
    margin: 0,
    padding: "12px 0"
  },
  p: {
    fontFamily: fontNames.futuristic,
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "left",
    margin: 0,
    padding: "8px 0"
  },
  pLarg: {
    fontFamily: fontNames.futuristic,
    fontSize: "1.3em",
    fontWeight: 400,
    textAlign: "left",
    margin: 0,
    padding: "8px 0"
  },
  quote: {
    fontFamily: fontNames.classic,
    fontSize: "1em",
    fontWeight: 400,
    fontStyle: "italic",
    textAlign: "justify",
    lineHeight: "2em",
    margin: 0,
    padding: "8px 0"
  },
  listSpeaker: {
    fontFamily: fontNames.futuristic,
    fontSize: "1.2em",
    lineHeight: "1.6em",
    fontWeight: 400,
    textAlign: "left",
    margin: 0,
    padding: 8
  },
  headPaper: {
    padding: 12,
    background: "rgb(0,0,0,0.5)",
    color: colors.white,
    textAlign: "center",
    fontWeight: 700
  },
  headBoxs: {
    padding: 24
  },
  topLine: {
    textAlign: "center",
    paddingTop: 16
  },
  buttonWhite: {
    background: colors.white,
    padding: 8,
    textAlign: "center",
    color: colors.middle2,
    transition: "background 0.8s, color 0.8s",
    "&:hover": {
      color: colors.white,
      background: colors.middle2
    }
  },
  buttonGreen: {
    background: colors.middle2,
    padding: 8,
    textAlign: "center",
    color: colors.white,
    transition: "background 0.8s, color 0.8s",
    "&:hover": {
      color: colors.middle2,
      background: colors.white
    }
  },
  button: {
    background: colors.middle2,
    padding: 8,
    margin: "0 auto",
    cursor: "pointer",
    textAlign: "center",
    color: colors.light,
    transition: "background 0.8s, color 0.8s",
    "&:hover": {
      color: colors.white,
      background: colors.middle3
    }
  },
  query: {
    textAlign: "center",
    color: colors.light,
    background: colors.middle1,
    fontWeight: 900,
    fontFamily: "Roboto",
    fontSize: "16em"
  },
  infoBlock: {
    background: colors.light,
    color: colors.dark,
    textAlign: "center",
    borderTop: "8px solid " + colors.middle3,
    borderBottom: "8px solid " + colors.middle3,
    padding: "48px 24px",
    fontSize: "1.2em",
    fontStyle: "italic",
    lineHeight: "2em"
  },
  slogan: {
    paddingTop: "35vh",
    paddingBottom: "35vh",
    fontSize: "2em",
    textAlign: "center",
    color: colors.middle2,
    lineHeight: "1.5em"
  },
  tileBlack: {
    padding: 12,
    background: "rgba(0,0,0,0.5)",
    color: colors.white
  },
  darkBlock: {
    background: colors.dark,
    padding: 24,
    paddingLeft: 48,
    fontSize: "1.2em",
    color: colors.light,
    borderLeft: "48px solid " + colors.middle2,
    lineHeight: "2em"
  }
};

export const useStyle = makeStyles(styles);
