import React from "react";
import { HorizontalForm } from "../../components/forms";
import Title from "../../components/title-form";
import ScrollableAnchor from "react-scrollable-anchor";

export default function Forma() {
  return (
    <div>
      <ScrollableAnchor id={"in-club"}>
        <div style={{ height: 48 }} />
      </ScrollableAnchor>
      <Title text="Вступить в клуб" />
      <HorizontalForm />
    </div>
  );
}
