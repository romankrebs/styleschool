import React from "react";
import { Grid, CircularProgress, IconButton } from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import { HorizontalForm } from "../../components/forms";

const Button = props => {
  return (
    <div
      style={{
        background: props.color ? props.color : "rgb(87,123,200)", // "rgb(200,60,255)",
        cursor: "pointer",
        padding: 12,
        color: "rgb(255,255,255)",
        borderRadius: 6,
        maxWidth: 300,
        textAlign: "center",
        margin: "0 auto"
      }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

class Forma extends React.Component {
  state = {
    open: false,
    url: "",
    loaded: false
  };

  styles = {
    h3: {
      font: "600 1.2em 'Futura-Normal'",
      color: "rgb(160,100,100)",
      textAlign: "center"
    }
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  setUrl = () => {
    this.setState({
      url: "https://billing.styleschool.ru/event/niDywbtzRQRMdpdLz/simple",
      loaded: false
    });
  };

  render() {
    return (
      <div>
        <Grid container alignItems="stretch" justify="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <h3 style={this.styles.h3}>Узнайте больше:</h3>
            <Button onClick={this.toggle}>Записаться на собеседовние</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <h3 style={this.styles.h3}>Получите выгоду:</h3>
            <Button onClick={this.setUrl} color="rgb(200,0,0)">
              Внести аванс 2000 рублей
            </Button>
          </Grid>
          <Grid item>
            <div
              style={{
                maxHeight: this.state.open ? 500 : 0,
                transition: "max-height 1s",
                overflow: "hidden"
              }}
            >
              <HorizontalForm />
            </div>
          </Grid>
        </Grid>
        {this.state.url !== "" ? (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              background: "rgba(255,255,255,1)",
              zIndex: 997
            }}
          >
            {!this.state.loaded && (
              <CircularProgress
                style={{
                  position: "absolute",
                  left: "calc(50% - 40px)",
                  top: "calc(50% - 40px)",
                  zIndex: -1
                }}
              />
            )}
            <iframe
              src={this.state.url}
              title="windowPay"
              onLoad={() => this.setState({ loaded: true })}
              style={{
                border: 0,
                height: "100%",
                width: "100%",
                zIndex: 1000,
                backgroundColor: `#0c0c0c63`
              }}
            />
            <IconButton
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 1001
              }}
              onClick={() => this.setState({ url: "" })}
            >
              <Clear style={{ color: "white" }} />
            </IconButton>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Forma;
