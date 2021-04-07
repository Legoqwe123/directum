import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "emotion-theming"
import { Box } from "rebass"

import { theme } from "./theme/theme"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            path="*"
            component={() => (
              <Box
                color={["blue", "lightgray", "red", "orange", "green", "black"]}
              >
                hello
              </Box>
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
