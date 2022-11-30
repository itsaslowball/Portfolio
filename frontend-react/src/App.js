
import './App.scss';

import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Skills from './container/Skills/Skills';
import Work from './container/Work/Work';
import Navbar from './components/Navbar/Navbar';
import End from './container/End/End'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header/>
      <About />
      <Work />
      <Skills />
      <Footer />
      <End />
    </div>
  );
}

export default App;
