import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import Highlight from "@site/src/components/Highlight";
import FntColor from "@site/src/components/FntColor";
import LazerCode from "@site/src/components/LazerCode";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  FntColor,
  LazerCode,
};
