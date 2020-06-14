import React from "react";
import Helmet from "react-helmet";

export default function TitleMeta(props) {
  return (
    <Helmet>
      <title>
        {props.public ? props.title + ": Публичный профиль" : props.title}
      </title>
      <meta
        name="keywords"
        content={
          props.keywords
            ? props.keywords
            : props.public
              ? props.title + ": Публичный профиль"
              : props.title
        }
      />
    </Helmet>
  );
}
