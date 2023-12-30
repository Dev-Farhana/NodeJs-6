import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../pages/register';
import Login from '../pages/login';
import Chat from '../pages/chat';

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/login' element={ <Login/> } />
            <Route path='/chat' element={ <Chat/> } />
        </Routes>    
    </BrowserRouter>

  )
}

export default AppRouter;
