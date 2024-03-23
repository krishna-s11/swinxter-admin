import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (
    <AuthProvider >
      <div className="App">
        <BrowserRouter>      
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
