
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/index';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={'/'} exact={true}  element={<Dashboard/>} />
      <Route path={'/dashboard'} exact={true}  element={<Dashboard/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
