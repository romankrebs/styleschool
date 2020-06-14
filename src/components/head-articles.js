import React from "react";
import { Link } from "react-router-dom";

export default function Head(props) {
  var styles = {
    h1: {
      padding: 12,
      fontFamily: "Roboto",
      fontSize: "2em",
      color: "rgb(100,100,100)",
      fontWeight: 700,
      textAlign: "center",
      margin: "0 auto",
      maxWidth: 800
    },
    author: {
      fontFamily: "Roboto",
      fontSize: "0.8em",
      color: "rgb(130,130,130)",
      fontWeight: 500
    },
    image: {
      height: 20,
      filter: "opacity(60%)",
      margin: 8,
      marginBottom: -3
    },
    link: {
      color: "rgb(130,130,130)"
    }
  };

  return (
    <div>
      <h1 style={styles.h1}>
        {props.head}{" "}
        {props.linkAuthor ? (
          <Link to={props.linkAuthor} style={styles.link}>
            <span style={styles.author}>{props.author}</span>
          </Link>
        ) : (
          <span style={styles.author}>{props.author}</span>
        )}
        {props.vk ? (
          <a href={props.vk}>
            <img src="/img/vk.svg" alt="" style={styles.image} />
          </a>
        ) : null}
        {props.fb ? (
          <a href={props.fb}>
            <img src="/img/facebook.svg" alt="" style={styles.image} />
          </a>
        ) : null}
        {props.instagram ? (
          <a href={props.instagram}>
            <img src="/img/instagram.svg" alt="" style={styles.image} />
          </a>
        ) : null}
      </h1>
    </div>
  );
}
