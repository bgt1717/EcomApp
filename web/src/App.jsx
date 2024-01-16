
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

function App() {

  return (
    <div>
      <BrowserRouter>
      {/* Navbar mounted in app.jsx */}
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        {/* Routes for '/mens', '/womens', and '/kids' render the ShopCategory component with the respective category prop. */}
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>

      </Routes>
      </BrowserRouter>
    </div>



  )
}

export default App
