// app/layout.tsx
"use client";

import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import store from '../store/store';
import theme from '../theme/theme';
import { AuthProvider } from '../components/context/authContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}> {/* Wrap in Provider */}
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
