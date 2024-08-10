import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Dashboard";
import Dame2 from "../Pages/Singup";
import Dame3 from "../Pages/Login";
import Hotel from "../Pages/Hotel";
import Room from "../Pages/Room";
import Customer from "../Pages/Customer";
import Payment from "../Pages/Pyment";
import HotelSharpIcon from '@mui/icons-material/HotelSharp';
import Staf from "../Pages/Staf";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Singup' element={<Dame2 />} />
        <Route path='/Login' element={<Dame3 />} />
        <Route path='/Hotel' element={<Hotel/>}/>
        <Route path='/Room' element ={ <Room />}/>
        <Route path='/Customer' element={<Customer/>}/>
        <Route path='/Staf' element={<Staf/>}/> 
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  );
}
