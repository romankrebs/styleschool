import React from "react";
import { styles } from "./styles";

function Reviews(props) {
  return (
    <div>
      <h2 style={styles.h2}>Отзывы о преподавателе</h2>
      {props.content}
    </div>
  );
}

export default Reviews;
