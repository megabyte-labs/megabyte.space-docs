module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'index',
        'main/getting-started/overview',
        'main/getting-started/faqs'
      ],
    },
    {
      type: 'category',
      label: 'Philosophy',
      collapsed: false,
      items: [
        'main/philosophy/index',
        'main/philosophy/style-guides',
        'main/philosophy/linting'
      ],
    },
    {
      type: 'category',
      label: 'Code',
      collapsed: false,
      items: [
        'main/code/images-videos'
      ]
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      items: [
        'main/contributing/index',
        'main/contributing/pull-requests',
        'main/contributing/feature-requests',
        'main/contributing/documentation',
        'main/contributing/community-guidelines'
      ],
    },
  ],

  api: [
    {
      type: 'category',
      label: 'Code',
      collapsed: false,
      items: ['code'],
    },
    {
      type: 'category',
      label: 'Featured',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/featured'
        }
      ]
    },
    {
      type: 'category',
      label: 'Ansible Roles',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/ansible', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'Docker Containers',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/docker-molecule', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'CodeClimate Engines',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/codeclimate', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'Systemd Containers',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/docker-molecule', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'Go',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/go', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/misc', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'NPM Packages',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/npm', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'Packer Templates',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/packer', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'Python',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/python', // Generate section automatically based on files
        },
      ],
    },
    {
      type: 'category',
      label: 'Boilerplates',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'repos/templates', // Generate section automatically based on files
        },
      ],
    },
  ],

  cli: [
    {
      type: 'category',
      label: 'CLI',
      collapsed: false,
      items: ['cli/index', 'cli/taskfiles'],
    },
    {
      type: 'category',
      label: 'Commands',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli/commands', // Generate section automatically based on files
        },
      ],
    },
  ],
};
