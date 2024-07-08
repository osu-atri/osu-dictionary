import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="osu-dictionary-Exp"
      repoId="R_kgDOMTZY-Q"
      category="General"
      categoryId="DIC_kwDOMTZY-c4CgpES"  // E.g. id of "General"
      mapping="pathname"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}