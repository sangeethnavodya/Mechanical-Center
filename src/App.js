import logo from './logo.svg';
import './App.css';
import Home from './Screens/HomePage';
import {Routes,Route} from 'react-router-dom'
import SignPage from './Screens/SignIn';
import AdminHomePage from './Screens/AdminHomePage';
import UpdatingFuelStationPage from './Screens/UpdatingFuelStationPage';
import OwnerHomePage from './Screens/OwnerHomePage'
import CreateShopPage from './Screens/CreateShopPage';
import ShopHomePage from './Screens/ShopHomePage'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/signin'element={<SignPage/>}/>
        <Route path='/adminHome' element={<AdminHomePage/>}/>
        <Route path='/updateFuelStation' element={<UpdatingFuelStationPage/>}/>
        <Route path='/ownerHome' element={<OwnerHomePage/>}/>
        <Route path='/createShop' element={<CreateShopPage/>}/>
        <Route path='/shopHome' element={<ShopHomePage/>}/>
      </Routes>
    </div>

  );
}

export default App;
