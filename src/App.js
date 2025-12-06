import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { MainContent } from './main';
import { Template } from './template';
import { AdminLogin } from './admin-login';
import { AdminDash } from './admin-dash';
import { AddVideos } from './addvideos';
import { EditVideos } from './edit-video';
import { RegisterUsers } from './Register';
import { Login } from './LoginUsers';
import { Videodash } from './Video-dash';

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Template />} />
          <Route path='main' element={<MainContent />} />
          <Route path='admin-login' element={<AdminLogin />} />
          <Route path='admin-dash' element={<AdminDash />} />
          <Route path='add-videos' element={<AddVideos />} />
          <Route path='edit-videos/:id' element={<EditVideos />} />
          <Route path='register-users' element={<RegisterUsers />} />
          <Route path='login' element={<Login />} />
          <Route path='video-dash' element={<Videodash />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
