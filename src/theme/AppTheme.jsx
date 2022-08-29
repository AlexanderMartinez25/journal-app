import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"

import { purpleThme } from "./purpleTheme"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleThme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
