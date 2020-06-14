import React from "react";

import Head from "../../components/header-title";

export default function Header(props) {
  return <Head head={props.title} subtitle={props.short} />;
}
