/// <reference types="vite/client" />
import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',    value: '#111116' },
        { name: 'surface', value: '#17171f' },
      ],
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
