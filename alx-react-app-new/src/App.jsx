import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <UserProfile
        name="John Doe"
        age={30}
        bio="A travel enthusiast who loves exploring new cities."
      />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
