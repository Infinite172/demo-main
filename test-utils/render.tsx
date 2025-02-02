import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';

import { theme } from '../src/config/theme';

export const render = (ui: React.ReactNode) =>
  testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
