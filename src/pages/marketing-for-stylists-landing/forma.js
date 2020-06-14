import React from "react";
import { HorizontalForm } from "../../components/forms";
import ScrollableAncor from "react-scrollable-anchor";
import { useStyle } from "./styles";

const Forma = () => {
  const classes = useStyle();

  return (
    <div>
      <ScrollableAncor id="register">
        <h2 className={classes.h2}>Оставте заявку или зарегистрируйтесь</h2>
      </ScrollableAncor>
      <HorizontalForm />
    </div>
  );
};

export default Forma;
