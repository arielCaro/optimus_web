
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/index';
import Siderbar from './components/SiderBar';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <div className='main d-flex'>
      <div className='siderbarWrapper'>
        <Siderbar />
      </div>
      <div className='content'>
        <Routes>
          <Route path={'/'} exact={true}  element={<Dashboard/>} />
          <Route path={'/dashboard'} exact={true}  element={<Dashboard/>} />
        </Routes>
      </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
