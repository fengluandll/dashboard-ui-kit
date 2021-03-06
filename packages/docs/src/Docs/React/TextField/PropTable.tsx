import * as React from "react";
import { PropTable, properties } from "../../components";

const itemProps = [
  properties.className(),
  {
    prop: "label",
    propType: "string",
    desc:
      'Label text. Ideally you should pass "id" as well, TextField will automatically connect the label with "for"'
  },
  properties.bool({
    prop: "clear",
    desc: "Renders without borders."
  }),
  {
    prop: "errorMessage",
    propType: "React.ReactNode",
    desc: "Displays error message and renders input in error state."
  },
  {
    prop: "successMessage",
    propType: "React.ReactNode",
    desc: "Displays success message and renders input in success state."
  },
  {
    prop: "leftEl",
    propType: "React.ReactNode",
    desc: "Displayes content on left side of the input, e.g. icon"
  },
  {
    prop: "rightEl",
    propType: "React.ReactNode",
    desc: "Displayes content on right side of the input, e.g. icon"
  },
  properties.rest({
    prop: "wrapperProps",
    desc: "Pass down properties to the element that wraps the input and icons.",
    propType: 'Props of "div"'
  }),
  properties.formGroup(),
  properties.rest({
    desc: <>Other properties are passed down to the input element</>
  })
];

export const ReactDocsButton = () => {
  return (
    <>
      <h2 id="props">Prop table</h2>
      <PropTable itemProps={itemProps} />
    </>
  );
};

export default ReactDocsButton;
