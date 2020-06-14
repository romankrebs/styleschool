import React from "react";

export default function Descript() {
  var styles = {
    box: {
      background: "rgba(245,240,235,1)",
      border: "3px dotted rgb(222,222,222)",
      borderRadius: 6,
      paddingTop: 16,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 16,
      marginTop: 20
    },
    text: {
      fontFamily: "Roboto",
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      padding: 0,
      paddingBottom: 10,
      margin: 0
    },
    psevdoButton: {
      background: "rgba(245,230,180,1)",
      borderRadius: 6,
      padding: 8,
      margin: "0 auto",
      fontFamily: "Roboto",
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      maxWidth: 400
    }
  };
  
  return (
    <div style={styles.box}>
      <p style={styles.text}>В рамках курса дизайна и декорирования интерьера предусмотрены лекционные занятия, практические занятия и мастер-классы дизайнеров-практиков, что позволит не только освоить сумму знаний, но и закрепить их в необходимых практических навыках.</p>
      <div style={styles.psevdoButton}>Продолжительность курса &ndash; 9 месяцев.</div>
    </div>
  );
}