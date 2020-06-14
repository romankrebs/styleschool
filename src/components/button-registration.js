import React from "react";

// import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function ButtonRegister(props) {
  return (
    <Button
      variant="contained"
      style={{
        width: "100%",
        background: props.bkg,
        color: props.color
      }}
    >
      <img src="/img/file-document-edit.svg" alt="Зарегистрироваться" />
      &nbsp; {props.message}
    </Button>
  );
}
