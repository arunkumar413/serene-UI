// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'getting-started',
    'theming',
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/buttons',
        'components/inputs',
        'components/typography',
        'components/paragraph',
        'components/border-radius',
        'components/tags',
        'components/hover',
        'components/checkboxes',
        'components/radio-buttons',
        'components/range',
        'components/links',
        'components/colors',
        'components/snackbars',
        'components/accordions',
        'components/tables',
        'components/utilities',
      ],
    },
  ],
};

export default sidebars;
