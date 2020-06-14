import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Vk from "../../components/button-vk";
import Facebook from "../../components/button-facebook";
import Instagram from "../../components/button-instagram";
import Youtube from "../../components/button-youtube";

// const useStyles = makeStyles({
//   icons: {
//     color: props => props.color,
//     transition: "1s color",
//     "&:hover": {
//       color: props.hoverColor
//     }
//   }
// });

const Socnet = function(props) {
  const color = "rgb(229,183,101)";
  const hoverColor = "rgb(254,232,123)";
  // const classes = useStyles(props);
  return (
    <span style={{ marginBottom: -4 }}>
      <Vk color={color} hoverColor={hoverColor} />
      <Facebook color={color} hoverColor={hoverColor} />
      <Instagram color={color} hoverColor={hoverColor} />
      &ensp;
      <Youtube color={color} hoverColor={hoverColor} />
    </span>
  );
};

export default Socnet;
