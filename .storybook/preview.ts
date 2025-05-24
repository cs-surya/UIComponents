// .storybook/preview.ts
import '../src/styles/index.css';               // Global styles
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // MDB styles

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Optional: docs container settings, viewport, backgrounds, etc.
  },
};

export default preview;
