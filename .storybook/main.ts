// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  // Only include MDX & CSF stories inside Components
  stories: [
    '../src/Components/**/*.mdx',
    '../src/Components/**/*.stories.@(js|jsx|ts|tsx|mjs)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
  // If you serve static assets (e.g. images), uncomment and adjust:
  // staticDirs: ['../public'],
};

export default config;
