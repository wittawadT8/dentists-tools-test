'use client'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}