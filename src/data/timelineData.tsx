/* eslint-disable react/jsx-key */

import React, {ReactNode} from 'react';

export enum ExperienceCategory {
  Work = 'Work',
  Project = 'Projects',
  Volunteer = 'Volunteer',
}

type TimelineLink = {
  url: string;
  text: string;
};

export type TimelineItemData = {
  date: string;
  title: string;
  subtitle?: string;
  category: ExperienceCategory;
  links?: TimelineLink[];
  items: ReactNode[];
};

const experience: TimelineItemData[] = [
  {
    date: 'Sept 2021 - Present',
    title: 'Shopify - Caching Platform',
    subtitle: 'Production Engineer (Part-Time)',
    category: ExperienceCategory.Work,
    items: ['Coming soon...'],
  },
  {
    date: 'Jan 2021 - Aug 2021',
    title: 'Shopify - Checkout',
    subtitle: 'Backend Developer (Part-Time)',
    category: ExperienceCategory.Work,
    items: [
      <p>
        Develop a large scale application to power Shopify Checkout flows using{' '}
        <strong>Ruby on Rails</strong> and <strong>GraphQL</strong>.
      </p>,
      'Evaluate strategies to migrate legacy code to meet new requirements and achieve feature parity.',
    ],
  },
  {
    date: 'June 2020 - Present',
    title: 'Dev Degree Dashboard',
    category: ExperienceCategory.Project,
    items: [
      <p>
        Built a fullstack web application to track Dev Degree students&apos;
        past projects and teams using <strong>Ruby on Rails</strong>,{' '}
        <strong>React</strong>, and <strong>GraphQL</strong>.
      </p>,
      <p>
        Aggregate data from various sources and programmatically refresh data
        daily.
      </p>,
      <p>
        Set up performance monitoring with <strong>Datadog</strong>, as well as
        error handling and reporting using <strong>Bugsnag</strong>.
      </p>,
      <p>
        Implemented user authentication, continuous integration, and continuous
        deployment.
      </p>,
    ],
  },
  {
    date: 'May 2020 - Dec 2020',
    title: 'Shopify - Experiments Platform',
    subtitle: 'Data Engineer (Part-Time)',
    category: ExperienceCategory.Work,
    items: [
      'Built and launched internal experimentation platform, empowering teams to conduct cross-surface experiments.',
      'Championed a team of three responsible for creating a data visualization tool to calculate the number of samples required to attain significance using Bayesian statistics.',
      <p>
        Identified and removed a bottleneck during experiment group
        partitioning, improving worst case performance by <strong>99.7%</strong>
        {/* */}.
      </p>,
      <p>
        Developed data pipelines to process and analyze data using{' '}
        <strong>Python</strong> and <strong>Apache Spark</strong>.
      </p>,
      <p>
        Authored and documented new performance metrics written in{' '}
        <strong>SQL</strong>.
      </p>,
      'Conducted usability testing sessions with data scientists to iterate and improve product.',
    ],
  },
  {
    date: 'Sep 2019',
    title: 'AutoDeck',
    subtitle: 'PennAppsXX',
    category: ExperienceCategory.Project,
    links: [
      {
        text: 'Devpost',
        url: 'https://devpost.com/software/autodeck',
      },
      {
        text: 'GitHub',
        url: 'https://github.com/JonathanGin52/AutoDeck',
      },
    ],
    items: [
      'Built a slide deck creation tool that dynamically generates a PowerPoint presentation while the user is presenting.',
      <p>
        Created a Google Slides API client using <strong>Express</strong> and{' '}
        <strong>Node.js</strong> to manage slide elements in real time.
      </p>,
      <p>
        Leveraged <strong>Google Cloud NLP</strong> for entity extraction and
        salience calculation.
      </p>,
      'Selected as one of the winners at PennAppsXX (≈1250 participants).',
    ],
  },
  {
    date: 'May 2019 - Apr 2020',
    title: 'Shopify - Shopify Fulfillment Network',
    subtitle: 'Fullstack Developer (Part-Time)',
    category: ExperienceCategory.Work,
    items: [
      <p>
        Worked on the{' '}
        <a
          href="https://www.shopify.com/fulfillment"
          target="_blank"
          rel="noreferrer"
        >
          Shopify Fulfillment Network
        </a>{' '}
        prior to launch and supported application post-launch.
      </p>,
      <p>
        Built <strong>GraphQL</strong> endpoints and constructed data models to
        support the application backend.
      </p>,
      <p>
        Developed and maintained modular frontend components along with
        comprehensive unit tests using <strong>React</strong>,{' '}
        <strong>Jest</strong>, and <strong>Enzyme</strong>.
      </p>,
      'Wrote middleware software to integrate internal APIs with third party logistics.',
    ],
  },
  {
    date: 'Mar 2019 - Present',
    title: 'Mentor',
    subtitle: 'Various Hackathons',
    category: ExperienceCategory.Volunteer,
    items: [
      <p>
        Mentor hackers at various hackathons including{' '}
        <a href="https://hackthenorth.com" target="_blank" rel="noreferrer">
          Hack the North
        </a>
        ,{' '}
        <a href="https://mh5.masseyhacks.ca" target="_blank" rel="noreferrer">
          MasseyHacks
        </a>{' '}
        and{' '}
        <a href="https://hackwestern.com" target="_blank" rel="noreferrer">
          Hack Western
        </a>
        {/* */}.
      </p>,
      'Guide hackers through issues related to frontend, backend, and project ideation.',
    ],
  },
  {
    date: 'Feb 2018',
    title: 'ProfitOverflow',
    subtitle: 'Hack the Hammer',
    category: ExperienceCategory.Project,
    links: [
      {
        url: 'https://devpost.com/software/ml-trader',
        text: 'Devpost',
      },
      {
        url: 'https://github.com/tommoffat/ML-Trader---Hack-the-Hammer',
        text: 'GitHub',
      },
    ],
    items: [
      <p>
        Created a cryptocurrency portfolio manager to conduct high-frequency
        Bitcoin trading using a recurrent neural network built with{' '}
        <strong>Keras</strong> on top of <strong>TensorFlow</strong>.
      </p>,
      <p>
        Trained model using historical data obtained via the Coindesk API and
        fetched real-time data from{' '}
        <a href="https://cryptowat.ch" target="_blank" rel="noreferrer">
          cryptowat.ch
        </a>{' '}
        to generate bi-minutely predictions.
      </p>,
      <p>
        Awarded first place prize at{' '}
        <a href="https://s1.hackthehammer.com" target="_blank" rel="noreferrer">
          Hack the Hammer
        </a>{' '}
        (≈100 participants).
      </p>,
    ],
  },
  {
    date: 'May 2017 - Apr 2019',
    title: 'Toronto Chinatown Festival',
    subtitle: 'Team Lead and Event Organizer',
    category: ExperienceCategory.Volunteer,
    links: [
      {
        url: 'https://chinatownbia.com/eventsnews/tcf2019',
        text: 'Event Website',
      },
    ],
    items: [
      <p>
        Acted as a team lead and organizer for the Toronto Chinatown Festival,
        which attracted <strong>200,000+ visitors</strong> over a two day
        period.
      </p>,
      'Played an active role during the event planning process by leading the discussion around youth engagement.',
      'Managed a rotating team of 8-12 volunteers responsible for booth staffing, visitor surveying, and crowd control during the event.',
      'Served as an ambassador for the Chinatown Business Improvement Area during discussions with vendors.',
    ],
  },
];

export {experience};
