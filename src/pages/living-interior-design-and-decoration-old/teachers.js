import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";
import H3 from "../../components/head3";

function Portret (props){
  return (
    <div style={{
      borderRadius: "50%"
    }}>
      <img src={props.image} alt="" style={{height: 150, borderRadius: "50%", ...props.style}} />
    </div>
  );
}

function Teacher (props){
  var styles = {
    text: {
      fontFamily: "Roboto",
      fontSize: "0.8em",
      textAlign: "center",
      color: "rgb(100,100,100)",
      padding: 0,
      margin: 0
    },
    descript: {
      fontFamily: "Roboto",
      fontSize: "1em",
      textAlign: "center",
      color: "rgb(100,100,100)",
      fontWeight: 700,
      margin: 0,
      padding: 0
    }
  };

  var descript;

  if (props.descript){
    descript=(<p style={styles.descript}>{props.descript}</p>);
  }

  return (
    <div style={{textAlign: "center", padding: 20}}>
      <Portret 
        image={props.image}
      />
      <H3 
        content={props.name}
        style={{margin: 5, fontSize: "1.4em"}}
      />
      {descript}
      <p style={styles.text}>{props.text}</p>
    </div>
  );
}

export default function Teachers() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <H2 
          content="Преподаватели"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Teacher 
          image="/img/living-interior-design-and-decoration/teacher-03.jpg"
          name="Галина Варакина"
          descript="(Россия)"
          text="Профессор, эксперт Российского научного фонда, куратор курса. Ведет дисциплины по истории архитектуры и интерьерного дизайна."
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Teacher 
          image="/img/living-interior-design-and-decoration/teacher-04.jpg"
          name="Марина Костарнова"
          descript="(Бельгия)"
          text="Дизайнер интерьеров более 20 лет с опытом руководства кафедрой дизайна. Ведет дисциплины по дизайн проектированию, композиции."
          />
      </Grid>
      <Grid item xs={12} md={3}>
        <Teacher 
          image="/img/living-interior-design-and-decoration/teacher-02.jpg"
          name="Юлия Артамонова"
          text="Преподаватель истории дизайна, член Союза Дизайнеров России, преподаватель ВШС"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Teacher 
          image="/img/living-interior-design-and-decoration/teacher-01.jpg"
          name="Дарья Воронина"
          descript="(Россия)"
          text="Искусствовед, доцент факультета «Дизайн» Международного Славянского института, художник, Ведет дисциплины по колористике, декорироанию."
        />
      </Grid>
    </Grid>
  );
}