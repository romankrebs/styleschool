import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
// import Paragraph from "../../components/p-array";
import { Link } from "react-router-dom";

export default function Blog(props) {
  var styles = {
    head: {
      padding: 4,
      fontFamily: "Roboto",
      fontSize: "1.6em",
      color: "rgb(100,100,100)",
      fontWeight: 700,
      textAlign: "center",
      margin: 0
    },
    author: {
      padding: 4,
      fontFamily: "Roboto",
      fontSize: "1.4em",
      color: "rgb(130,130,130)",
      fontWeight: 700,
      textAlign: "center",
      margin: 0
    },
    link: {
      color: "rgb(130,130,130)"
    },
    image: {
      maxWidth: 300
    },
    top: {
      padding: "5px 5px 5px 20px",
      background: "rgba(255,255,255,0.8)"
    },
    imageBox: {
      textAlign: "center"
    }
  };

  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="keywords" content={props.keywords} />
      </Helmet>
      <Top />
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <h1 style={styles.head}>{props.head}</h1>
          {props.link ? (
            <Link to={props.link} style={styles.link}>
              <h2 style={styles.author}>{props.author}</h2>
            </Link>
          ) : (
            <h2 style={styles.author}>{props.author}</h2>
          )}
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={12} md={5} style={{ padding: 12 }}>
              <div style={styles.imageBox}>
                <img src={props.image} style={styles.image} alt={props.head} />
              </div>
            </Grid>
            <Grid item xs={12} md={7} style={{ padding: 12 }}>
              {props.content}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
