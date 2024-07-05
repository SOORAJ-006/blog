import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import PreviewGrid from './components/PreviewGrid';
import Footer from './components/Footer';
import Login from './components/ReactRouter/Pages/Login';
import Banner from './components/Banner';

function App() {
  return (
    <section className="App">
      
      <NavBar />
      <Banner />
      <PreviewGrid />
      {/* <Login /> */}
      <Footer />
    
        
     
    </section>
  );
}

export default App;
