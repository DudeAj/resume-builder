import './App.scss';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import "./utils/authCheck";
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Container from './Container/Container';
import Frontpage from './pages/Frontpage/Frontpage';
import Template from './pages/Template/Template';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills';
import Language from './pages/Language/Language';
import Certification from './pages/Certification/Certification'
import Summary from './pages/Summary/Summary';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />
        <Route path="/front" exact component={Frontpage} />
        <Route path="/template" exact component={Template} />
        <Container>
          <Route path="/create" exact component={Create} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/languages" exact component={Language} />
          <Route path="/certification" exact component={Certification}/>
          <Route path="/summary" exact component={Summary}/>

        </Container>

      </Switch>
    </div>
  );
}

export default App;
