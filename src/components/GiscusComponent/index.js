import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="osu-atri/osu-atri.github.io"
      repoId="R_kgDOMN7Jkg"
      category="General"
      categoryId="DIC_kwDOMN7Jks4CgXXQ"
      mapping="og:title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
      term="Welcome to @giscus/react component!"
      strict="0"
      crossorigin="anonymous"
      async
    />
  );
}
