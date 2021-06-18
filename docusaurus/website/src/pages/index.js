/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: 'Target Audience',
    content:
      "This course is aimed at MSc and PhD level students in computer science / data science.",
  },
  {
    title: 'For Non-CS/DS Students',
    content:
      'Please contact Rosemary Amico (amico at cs.nyu.edu)',
  },
  // {
  //   title: 'No Lock-In',
  //   content:
  //     'Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app. If you ever want an advanced configuration, you can ”eject” from Create React App and edit their config files directly.',
  // },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern web app by running one command.'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/getting-started')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h2>
                Overview
              </h2>
              <p>
                Deep Reinforcement Learning (RL) has made massive strides in the last decade for sequential decision making problems such as playing Atari games, mastering GO, and continuous control of robots. This course serves as a graduate-level introduction to RL, with an emphasis on applications and recent research. Students will be introduced to a broad set of topics in RL: Basic formalisms; Exploration vs exploitation; Imitation learning; Model-free RL; Model-based control and planning; Unsupervised learning for RL; Applications to games, robotics, industry; Current frontiers. This course will involve several coding home-works where you will implement various algorithms, and a final project. Other alternative titles for this course are Adaptive control and learning, Dynamic optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <h2>
            Staff
          </h2>
          <div className="row">
            <div className="col col--4">
              <h3>
                Lerrel Pinto
              </h3>
              <img
                className={styles.featureImage}
                alt="Lerrel Pinto"
                src={
                  'https://www.lerrelpinto.com/authors/admin/avatar_hu4fd532323075888c71e9261145e3a1d5_40812_200x200_fill_q75_lanczos_center.jpg'
                }
              />
            </div>
            <div className="col col--4">
              <h3>
                Mahi Shafiullah
              </h3>
              <img
                className={styles.featureImage}
                alt="Mahi Shafiullah"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
            <div className="col col--4">
              <h3>
                Unnamed Grader
              </h3>
              <img
                className={styles.featureImage}
                alt="Easy to get started in seconds"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div
                  key={idx}
                  className={clsx('col col--6', styles.feature)}
                >
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
      {/* <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>Get started in seconds</h2>
              <p>
                Whether you’re using React or another library, Create React App
                lets you <strong>focus on code, not build tools</strong>.
                <br />
                <br />
                To create a project called <i>my-app</i>, run this command:
              </p>
              <CodeBlock className="language-sh">
                npx create-react-app my-app
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to get started in seconds"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to update"
                src={useBaseUrl('img/update.png')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>Easy to Maintain</h2>
              <p>
                Updating your build tooling is typically a daunting and
                time-consuming task. When new versions of Create React App are
                released, you can upgrade using a single command:
              </p>
              <CodeBlock className="language-sh">
                npm install react-scripts@latest
              </CodeBlock>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default Home;
