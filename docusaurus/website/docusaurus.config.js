/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Deep Reinforcement Learning',
  tagline: 'CSCI-GA 3033-090, Fall 2021',
  url: 'https://create-react-app.dev',
  baseUrl: '/',
  projectName: 'nyu-deep-rl',
  organizationName: 'new-york-university',
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl:
            'https://github.com/facebook/create-react-app/edit/master/docusaurus/website',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo-og.png',
    algolia: {
      apiKey: '3be60f4f8ffc24c75da84857d6323791',
      indexName: 'create-react-app',
    },
    navbar: {
      title: 'Deep Reinforcement Learning',
      logo: {
        alt: 'NYU Courant LOGO',
        src: 'img/logo.svg',
      },
      items: [
        { 
          to: 'docs/logistics', 
          label: 'Logistics', 
          position: 'left' 
        },
        { 
          to: 'docs/lectures', 
          label: 'Lectures', 
          position: 'left' 
        },
        { 
          to: 'docs/assignments', 
          label: 'Assignments', 
          position: 'left' 
        },
//         { 
//           to: 'docs/staff', 
//           label: 'Staff', 
//           position: 'left' 
//         },
//         { 
//           to: 'docs/contact', 
//           label: 'Contact', 
//           position: 'left' 
//         },
//         { 
//           to: 'docs/suggested-projects', 
//           label: 'Suggested Projects', 
//           position: 'left' 
//         },
        // {
        //   href: 'https://reactjs.org/community/support.html',
        //   label: 'Help',
        //   position: 'left',
        // },
        // {
        //   href: 'https://www.github.com/facebook/create-react-app',
        //   label: 'GitHub',
        //   position: 'left',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Schedule',
              to: 'docs/lectures',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Class Campuswire',
              href: 'https://campuswire.com'
            },
            {
              label: 'Staff information',
              to: 'docs/staff'
            },
            // {
            //   label: 'GitHub Discussions',
            //   href: 'https://github.com/facebook/create-react-app/discussions',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/reactjs',
            // },
            // {
            //   label: 'Contributor Covenant',
            //   href:
            //     'https://www.contributor-covenant.org/version/1/4/code-of-conduct',
            // },
          ],
        },
        // {
        //   title: 'Social',
        //   items: [
        //     {
        //       label: 'GitHub',
        //       href: 'https://www.github.com/facebook/create-react-app',
        //     },
        //   ],
        // },
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'img/oss_logo.png',
      // },
      copyright: `Copyright © ${new Date().getFullYear()} NYU Generalizable Robotics and AI Lab`,
    },
  },
};

module.exports = siteConfig;
