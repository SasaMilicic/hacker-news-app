import Header from './components/header/Header';
import Pages from './pages/Pages';
import { StApp } from './style-app';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <StApp>
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </StApp>
  );
}

export default App;
