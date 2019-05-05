import React from 'react';
import './App.scss';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { Switch, Route } from 'react-router';

const App: React.FC = () => {
  return (
    <div className="App">
    <Layout>
      <Switch>
        <Route path="/" component={Home} /> 
      </Switch>
    </Layout>
    </div>
  );
}

export default App;
