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
import CustomerHomePage from './Screens/CustomerHomePage';
import CFuelStationPage from './Screens/CFuelStationPage';
import ItemAddingPage from './Screens/ItemAddingPage';
import ShopWithItemPage from './Screens/ShopWithItemPage';


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
        <Route path='/customerHome' element={<CustomerHomePage/>}/>
        <Route path='/seeFuel'element={<CFuelStationPage/>}/>
        <Route path='/itemAddingForm' element={<ItemAddingPage/>}/>
        <Route path='/shopView' element={<ShopWithItemPage/>}/>

      </Routes>
    </div>

  );
}

export default App;
