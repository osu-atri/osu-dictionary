import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageTitle from '@site/src/components/HomepageTitle/HomepageTitle.js';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const common = require('../../common.js');

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // Should we keep this button?
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="landing.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            进入术语表
          </Link>
        </div>
        <HomepageTitle />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${common.description}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
