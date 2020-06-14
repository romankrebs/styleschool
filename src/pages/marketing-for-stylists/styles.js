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
    padding: "18px 8px"
  },
  h3: {
    fontFamily: fontNames.futuristic,
    fontSize: "1.4em",
    fontWeight: 500,
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
    paddingTop: 8
  }
};
