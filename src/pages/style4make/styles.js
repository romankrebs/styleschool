import { makeStyles } from "@material-ui/styles";

export const colors = {
  white: "rgb(255,255,255)",
  light: "rgb(242,250,255)",
  border: "rgb(232,230,245)",
  middle: "rgb(67,195,221)",
  dark: "rgb(34,65,85)",
  indigo: "rgb(43,14,93)",
  lightForText: "rgb(169,224,212)"
};

export const styles = {
  h1: {
    textAlign: "center",
    fontFamily: "Lora",
    fontSize: "3em",
    fontWeight: 600,
    margin: 0,
    padding: "48px 0"
  },
  h2: {
    textAlign: "center",
    fontFamily: "Lora",
    fontSize: "1.6em",
    fontWeight: 600,
    margin: 0,
    padding: "20px 0"
  },
  name: {
    textAlign: "center",
    fontFamily: "Lora",
    fontSize: "1.6em",
    fontWeight: 600,
    margin: 0,
    padding: "20px 0"
  },
  p: {
    textAlign: "justify",
    fontSize: "1.2em",
    margin: 0,
    padding: "4px 0",
    lineHeight: "1.8em"
  },
  coursive: {
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "1.4em",
    lineHeight: "1.5em"
  },
  tableLight: {
    background: colors.white,
    color: colors.indigo,
    borderBottom: "1px solid " + colors.border,
    fontSize: "1.3em",
    padding: 12
  },
  tableDark: {
    background: colors.light,
    color: colors.indigo,
    borderBottom: "1px solid " + colors.border,
    fontSize: "1.3em",
    padding: 12
  },
  practica: {
    fontSize: "2em",
    fontWeight: 300,
    textAlign: "center",
    padding: 24
  }
};

export const useStyles = makeStyles(styles);
