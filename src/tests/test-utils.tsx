import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>,
    options
  );
};

export * from '@testing-library/react';

export { customRender as render };
