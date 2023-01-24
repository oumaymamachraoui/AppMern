import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import AddContact from './pages/add/AddContact';
import EditContact from './pages/edit/EditContact';
import Home from './pages/home/Home';
import Users from './pages/users/Users';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddContact/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/edit/:id' element={<EditContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
