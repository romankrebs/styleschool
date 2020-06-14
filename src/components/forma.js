import React from "react";

import Grid from "@material-ui/core/Grid";

export default function Forma(props) {
  return (
    <Grid container justify="center" style={{ padding: 20 }}>
      <Grid
        item
        xs={6}
        md={6}
        style={{ padding: 5, border: "1px solid rgba(255,0,0,1)" }}
      >
        <div
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "2.3em",
            color: "rgb(200,0,0)"
          }}
        >
          Здесь должна быть форма обратной связи
        </div>
        {/*   <form noValidate autoComplete="off">
      //     {" "}
      //   </form>
      //   <TextField
      //     id="user-name"
      //     label="Ваше имя"
      //     type="email"
      //     name="userName"
      //     margin="dense"
      //     variant="outlined"
      //   />
      //   <TextField
      //     id="phone"
      //     label="Ваш телефон"
      //     type="email"
      //     name="phone"
      //     autoComplete="phone"
      //     margin="dense"
      //     variant="outlined"
      //   />
      //   <TextField
      //     id="outlined-email-input"
      //     label="Ваш email"
      //     type="email"
      //     name="email"
      //     autoComplete="email"
      //     margin="dense"
      //     variant="outlined"
      //   />
      // </Grid>
      // <Grid item xs={6} md={6}>
      //   <TextField
      //     id="outlined-multiline-static"
      //     label="Ваше сообщение"
      //     multiline
      //     rows="4"
      //     defaultValue=""
      //     margin="dense"
      //     variant="outlined"
      //   />
      // </Grid>
      // <Grid item xs={12} md={12}>
      //   <ButtonRegister message={props.message} />*/}
      </Grid>
    </Grid>
  );
}
