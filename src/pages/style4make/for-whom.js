import React from "react";
import { useStyles, colors } from "./styles";

const ForWhom = () => {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          padding: 32,
          color: colors.indigo
        }}
      >
        <h2 className={classes.h2}>Для кого этот курс</h2>
        <p className={classes.coursive}>
          Для практикующих визажистов и парикмахеров, которые стремятся к
          профессиональному росту и повышению квалификации, а так же для всех,
          кто хочет узнать как наша внешность диктует выбор стиля, что такое
          стилевые типажи и познакомиться с подиумными трендами не только
          одежды, но и причесок и макияжа.
        </p>
      </div>
      <div
        style={{
          height: 1,
          background: `linear-gradient(to right, transparent 0%, ${
            colors.indigo
          } 50%, transparent 100%)`
        }}
      />
    </div>
  );
};

export default ForWhom;
