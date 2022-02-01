import  { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Component/Appointment/Appointment/Appointment';
import DashbordMain from './Component/DashbordMain/DashbordMain';

import Home from './Component/Home/Home/Home';
import Loginpage from './Component/Loginpage/Loginpage';
import PageNotfound from './Component/PageNotfound/PageNotfound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
  export const badhonContext = createContext()
function App() {
    const [context, setcontext]=useState({})
    console.log('ahire vai',context)
  return (

    <div className="App">
      <badhonContext.Provider value={[context, setcontext]}>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path="/Appointment" element={ <PrivateRoute><Appointment/></PrivateRoute>}/>
        <Route path='/Loginpage/*' element={<Loginpage/>} />
        <Route path='/DashbordMain/*' element={<DashbordMain/>}/>
        <Route path='*' element={ <PageNotfound/>}/>
      </Routes>
      
     
    </badhonContext.Provider>
      
    </div>
  );
}

export default App;
