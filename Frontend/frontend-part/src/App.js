import {Navigate ,Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Navigate to='/login' />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
