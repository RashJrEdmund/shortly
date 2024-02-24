interface IFooterSection {
  header: string;
  list: { text: string, url: string }[];
}

const FEATURES: IFooterSection = {
  header: 'Features',
  list: [
    {
      text: 'Link Shortening',
      url: '/',
    },
    {
      text: 'Branded Links',
      url: '/',
    },
    {
      text: 'Analysis',
      url: '/',
    }
  ],
};

const RESOURCES: IFooterSection = {
  header: 'Resources',
  list: [
    {
      text: 'Blog',
      url: '/',
    },
    {
      text: 'Developers',
      url: '/',
    },
    {
      text: 'Support',
      url: '/',
    }
  ],
};

const COMPANY: IFooterSection = {
  header: 'Company',
  list: [
    {
      text: 'About',
      url: '/',
    },
    {
      text: 'Our Team',
      url: '/',
    },
    {
      text: 'Courses',
      url: '/',
    },
    {
      text: 'Contact',
      url: '/',
    }
  ],
};

export {
  FEATURES,
  RESOURCES,
  COMPANY,
}