import React, { Suspense, FunctionComponent } from 'react';

// * modules
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

// *components
import { NprogressFallback } from 'components/Nprogress';

// * helpers
import { history } from 'helpers/history';

// * constants
import * as PATHS from 'constants/paths';

/**
 * Route lazy imports
 */
const Home = React.lazy(() =>
    import(/* webpackChunkName: "views" */ './views/Home/Home'),
);

const Join = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views/JoinNow/JoinNow'),
);

const ViewError = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ './views/error'),
);

const App: FunctionComponent = (): JSX.Element => {
  return (
    <Suspense fallback={<NprogressFallback />}>
      <Router history={history}>
        <Switch>
          <Route exact path={PATHS.routes.home} component={Home} />
          <Route exact path={PATHS.routes.join} component={Join} />
          <Route exact path={PATHS.routes.error} component={ViewError} />

          <Redirect to={PATHS.routes.error} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
