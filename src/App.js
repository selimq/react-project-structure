import './App.css';
import { BrowserRouter } from 'react-router-dom'

import RouterConfig from './navigation/RouterConfig'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h3>React App</h3>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>

      </header>
    </div >
  );
}

export default App;
