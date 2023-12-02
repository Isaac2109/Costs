import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contatc from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Conteiner from './components/layout/Conteiner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';


function App() {
  return (
    <Router>
      <Navbar />
      <Conteiner customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/company" element={<Company />}/>
            <Route path="/contact" element={<Contatc />}/>
            <Route path="/newproject" element={<NewProject />}/>
        </Routes>
      </Conteiner>
      <Footer />
    </Router>
  );
}

export default App;
