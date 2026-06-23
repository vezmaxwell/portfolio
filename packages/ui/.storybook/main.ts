import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(ts|tsx)',
    '../../apps/portfolio/src/prototypes/**/*.stories.@(ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias = {
      ...((config.resolve.alias as Record<string, string>) ?? {}),
      '@vez/ui': path.resolve(__dirname, '../src/index.ts'),
    };
    return config;
  },
};

export default config;
