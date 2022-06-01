import './App.css';
import Body from './Layout/Body';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

function App() {
  return (
    <div className='App lg:h-screen h-full'>
      <Header />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
