import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import Highlight from "@site/src/components/Highlight";
import FntColor from "@site/src/components/FntColor";
import OsuIcon from "@site/src/components/OsuIcon/OsuIcon";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import { SettingsButton } from "@site/src/components/SettingsUI/SettingsUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  FontAwesomeIcon,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Highlight,
  FntColor,
  OsuIcon,
  Tabs,
  TabItem,
  SettingsButton,
};
