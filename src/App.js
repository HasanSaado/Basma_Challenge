// Components
import { Header } from './components/Header';
import { GetStarted } from './components/GetStarted';
import { CodeChallenge } from './components/CodeChallenge';

// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <CodeChallenge />
    </div>
  );
}

export default App;
