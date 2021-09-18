// Components
import { Header } from './components/Header';
import { GetStarted } from './components/GetStarted';
import { CodeChallenge } from './components/CodeChallenge';
import { Tools } from './components/Tools';
import { Share } from './components/Share';
import { Workflow } from './components/Workflow';

// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <CodeChallenge />
      <Tools />
      <Share />
      <Workflow />
    </div>
  );
}

export default App;
