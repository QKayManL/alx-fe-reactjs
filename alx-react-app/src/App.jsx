import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';

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
