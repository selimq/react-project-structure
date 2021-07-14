import './App.css';
import Header from './parts/header/index'
import { BrowserRouter } from 'react-router-dom'
import RouterConfig from './navigation/RouterConfig'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <RouterConfig />
      </BrowserRouter>

    </div >
  );
}

export default App;
