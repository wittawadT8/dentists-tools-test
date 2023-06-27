'use client'
import { StyledEngineProvider } from '@mui/material/styles'

export default function InjectTailwind({ children }: { children: React.ReactNode }) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
}