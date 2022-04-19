import { StApp } from './style-app';
import Header from './components/Header/Header';
import Main from './components/Main/story-page/MainStoryPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <StApp>
      <Header />
      <Main />
      <Footer />
    </StApp>
  );
}

export default App;
