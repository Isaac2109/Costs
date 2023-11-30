import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contatc from './components/pages/Contact';
import NewProject from './components/pages/NewProject';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/contact" element={<Contatc />}/>
        <Route path="/newproject" element={<NewProject />}/>
      </Routes>
    </Router>
  );
}

export default App;
