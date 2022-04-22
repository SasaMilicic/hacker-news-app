import * as S from './style-app';
import Header from './components/Header/Header';
import MainStoryPage from './components/Main/story-page/MainStoryPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <S.App>
      <Header />
      <MainStoryPage />
      <Footer />
    </S.App>
  );
}

export default App;
