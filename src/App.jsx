import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Home = React.lazy(() => import('./pages/home/Home'));


function App() {
    return (
      <Suspense fallback={<span>Loading</span>}>
          <Header />
        <Switch>
          <Route
                    path="/"
                    exact
                    component={Home}
          />
        </Switch>
          <Footer />
      </Suspense>
    );
}
export default withRouter(App);
