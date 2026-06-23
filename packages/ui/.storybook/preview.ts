import type { Preview } from '@storybook/react';
import '../src/themes/base.css';
import '../src/themes/finity.css';
import '../src/themes/script-assist.css';
import '../src/themes/karehero.css';
import '../src/themes/pictures.css';
import '../src/themes/runna.css';

if (typeof document !== 'undefined' && !document.getElementById('vez-fonts')) {
  const link = document.createElement('link');
  link.id = 'vez-fonts';
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Anton&family=Outfit:wght@400;500;600;700&family=PT+Mono&display=swap';
  document.head.appendChild(link);
}

const THEMES = ['base', 'finity', 'script-assist', 'karehero', 'pictures', 'runna'] as const;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#f7f7f7' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Project theme',
      defaultValue: 'base',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [...THEMES],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'base';
      if (theme === 'base') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
      return Story();
    },
  ],
};

export default preview;
