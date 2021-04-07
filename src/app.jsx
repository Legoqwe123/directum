import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "emotion-theming"

import { PhotoPage } from "@pages/photo.page"

import { theme } from "theme/theme"
import { store } from "store/store"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="*" component={PhotoPage} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}
