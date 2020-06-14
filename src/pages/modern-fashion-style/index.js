import React from "react";
import { Grid, CircularProgress, IconButton } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Header from "./header";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import TreeBlocks from "./tree-blocks";
import Buttons0 from "./buttons0";
import May from "./may2019";
import June from "./june2019";
import Jule from "./jule2019";
import April from "./april2019";
import Sept from "./september2019";
import Video from "./all-video";
import Descript from "./descript";
import Price from "./price";
import Concept from "./conception";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";
import { Clear } from "@material-ui/icons";

export default class Modern extends React.Component {
  state = {
    open: false,
    url: "",
    loaded: false
  };

  setBillingId = id => {
    this.setState({
      url: `https://billing.styleschool.ru/event/${id}/simple`,
      loaded: false
    });
  };

  render() {
    return (
      <div>
        <div style={{ maxWdth: 1000, margin: "0 auto" }}>
          <Helmet>
            <title>Лекции и мастер-классы экпертов и практиков</title>
            <meta
              name="keywords"
              content="ВШС: Лекции и мастер-классы экспертов и практиков"
            />
          </Helmet>
          <Top faqultet="Архив" />
        </div>
        <Header />
        <div style={{ maxWdth: 1000, margin: "0 auto" }}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Grid item xs={12} md={12} style={{ padding: 20 }}>
              <TreeBlocks />
              <Buttons0
                setBillingId={this.setBillingId}
                id="FZaJQDYA6QWvoQQdE/contract-rule/dAx4cWNRGtPXGapH6" // "Dfegnzb7LjMjP362c"
              />
              <Sept setBillingId={this.setBillingId} />
              <Jule setBillingId={this.setBillingId} />
              <June setBillingId={this.setBillingId} />
              <May setBillingId={this.setBillingId} />
              <April setBillingId={this.setBillingId} />
              <Video setBillingId={this.setBillingId} />
              <Descript />
              <Price />
            </Grid>
          </Grid>
          <Concept />
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Grid item xs={12} md={12} style={{ padding: 20 }}>
              <h2
                style={{
                  fontFamily: "Roboto",
                  fontSize: "2em",
                  fontWeight: 700,
                  textAlign: "center"
                }}
              >
                Подпишитесь или задайте вопрос
              </h2>
              <HorizontalForm />
              <Banners />
            </Grid>
          </Grid>
        </div>
        {this.state.url && (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 99997,
              backgroundColor: "white"
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
                height: "100%",
                width: "100%",
                border: 0,
                zIndex: 99999
              }}
            />
            <IconButton
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 99999,
                backgroundColor: `#0c0c0c63`
              }}
              onClick={() => this.setState({ url: "" })}
            >
              <Clear style={{ color: "white" }} />
            </IconButton>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
