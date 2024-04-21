import logo from './logo.svg';
 import './App.css';
import { Main } from './components/Main';
import { ShoppingCartProvider } from './context/ShoppingCartProvider';

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
      <Main/>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
