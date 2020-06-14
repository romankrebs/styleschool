import React from "react";
import Helmet from "react-helmet";
import Page from "./page";

function Root(props) {
  return (
    <div>
      <Helmet>
        <title>Высшая школа стилистики, дизайна и технологий</title>
      </Helmet>
      <Page />
    </div>
  );
}

export default Root;
