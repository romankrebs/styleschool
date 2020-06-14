import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Interes() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid
        item
        xs={12}
        md={12}
        style={{
          background: "rgba(251,223,187,1)",
          padding: 20,
          paddingLeft: 50,
          paddingRight: 50
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1em"
          }}
        >
          <b>Курс будет интересен:</b>
           Стилисту, шопперу, дизайнеру, блогеру, менеждеру, копирайтеру, всем
          тем, кому профессионально или творчески нужно писать статьи, релизы,
          рецензии, эссе, обзоры, анонс продуктов, готовить презентации.
        </p>
      </Grid>
    </Grid>
  );
}
