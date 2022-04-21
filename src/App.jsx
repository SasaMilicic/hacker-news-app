import { StApp } from './style-app';
import Header from './components/Header/Header';
import MainStoryPage from './components/Main/story-page/MainStoryPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <StApp>
      <Header />
      <MainStoryPage />
      <Footer />
    </StApp>
  );
}

export default App;
