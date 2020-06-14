import React from "react";
import Head from "../../components/header-title";
import { styles } from "./styles";

export default function Header(props) {
  return (
    <Head
      head={props.head}
      subtitle={
        <span>
          {props.shortHead.month} | {props.shortHead.classes} |{" "}
          {props.shortHead.hours} | {props.shortHead.online}
        </span>
      }
      styleHead={styles.h1}
      styleSubTitle={styles.h2}
    />
  );
}
