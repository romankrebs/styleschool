import React from "react";
import { whiteStyles } from "@material-ui/core/styles";
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
  const color = "rgb(187,144,41)"; // "rgb(229,183,101)";
  const hoverColor = "rgb(254,232,123)";
  // const classes = useStyles(props);
  return (
    <span style={{ marginBottom: -4 }}>
      <Vk
        color={color}
        hoverColor={hoverColor}
        // size={2}
        style={{ marginBottom: -7 }}
      />
      <Facebook
        color={color}
        hoverColor={hoverColor}
        size={20}
        style={{ marginBottom: -4 }}
      />
      <Instagram
        color={color}
        hoverColor={hoverColor}
        size={18}
        style={{ marginBottom: -4, marginLeft: 3 }}
      />
      &ensp;
      <Youtube
        color={color}
        hoverColor={hoverColor}
        size={26}
        style={{ marginBottom: -8 }}
      />
    </span>
  );
};

export default Socnet;
