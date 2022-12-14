import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import Read from './pages/Read';

function App() {
  return (
    <div>

      <AppNavbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/articles" element={<Article/>} />
        <Route path='/read/:id' element={<Read/>} />
      </Routes>

      <AppFooter/>

    </div>
  );
}

export default App;
