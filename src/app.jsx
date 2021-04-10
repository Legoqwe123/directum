import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "emotion-theming"

import { AuthorPage } from "@pages/author.page"
import { PhotoPage } from "@pages/photo.page"

import { theme } from "theme/theme"
import { store } from "store/store"
import { routes } from "core/routes"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={routes.photo} component={PhotoPage} />
            <Route exact path={routes.author} component={AuthorPage} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}
