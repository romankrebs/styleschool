import React from "react";

export default function Header(props) {
  return (
    <h1
      style={{
        fontSize: "1.8em",
        color: "rgb(100,100,100)",
        textAlign: "center",
        background: "rgba(255,255,255,.7)",
        margin: 0,
        padding: "8px 0"
      }}
    >
      {props.head}
      &emsp;
      {props.instagram ? (
        <a href={props.instagram}>
          &ensp;
          <img
            src="/img/instagram.svg"
            alt=""
            style={{ height: 18, opacity: 0.7 }}
          />
          &ensp;
        </a>
      ) : null}
      {props.facebook ? (
        <a href={props.facebook}>
          &ensp;
          <img
            src="/img/facebook.svg"
            alt=""
            style={{ height: 18, opacity: 0.7 }}
          />
          &ensp;
        </a>
      ) : null}
      {props.vk ? (
        <a href={props.vk}>
          &ensp;
          <img src="/img/vk.svg" alt="" style={{ height: 18, opacity: 0.7 }} />
          &ensp;
        </a>
      ) : null}
      {props.blogger ? (
        <a href={props.blogger}>
          &ensp;
          <img
            src="/img/blogger.svg"
            alt=""
            style={{ height: 18, opacity: 0.7 }}
          />
          &ensp;
        </a>
      ) : null}
      {props.phone ? (
        <a href={props.phone}>
          &ensp;
          <img
            src="/img/phone.svg"
            alt=""
            style={{ height: 18, opacity: 0.7 }}
          />
          &ensp;
        </a>
      ) : null}
    </h1>
  );
}
