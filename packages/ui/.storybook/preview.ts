import type { Preview } from '@storybook/react';
import '../src/themes/base.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Project theme',
      defaultValue: 'base',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['base', 'finity', 'script-assist', 'carehero'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'base';
      // Dynamically load the theme stylesheet
      const existing = document.getElementById('vez-theme');
      if (existing) existing.remove();
      if (theme !== 'base') {
        const link = document.createElement('link');
        link.id = 'vez-theme';
        link.rel = 'stylesheet';
        link.href = `/themes/${theme}.css`;
        document.head.appendChild(link);
      }
      return Story();
    },
  ],
};

export default preview;
