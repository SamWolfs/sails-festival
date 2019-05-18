import React from 'react';
import './App.scss';
import { Home } from './pages/Home';
import { Lineup } from './pages/Lineup';
import { Layout } from './components/Layout';
import { Switch, Route } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { far, faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far, faTwitter, faFacebookF, faInstagram, faEnvelope, faMap);

const App: React.FC = () => {
  return (
    <div className="App">
    <Layout>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/lineup" component={Lineup} />
        <Route path="/" component={Home} /> 
      </Switch>
    </Layout>
    </div>
  );
}

export default App;
