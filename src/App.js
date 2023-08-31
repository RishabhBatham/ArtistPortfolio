import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Works from './Components/Works/Works';
import Home from './Components/Home/Home';
import MyLoader from './Components/MyLoader/MyLoader';
import { Routes,BrowserRouter as Router,Route } from "react-router-dom";
import Contacts from './Components/Contacts/Contacts';
import Gallery from './Components/Gallery/Gallery';
import AboutPage from './Components/AboutPage/AboutPage';
function App() {
  const  [loading,setLoading]=useState(false)
  const [refresh,setRefresh ]=useState(false)




 
  const refreshMainPage=()=>{
    setRefresh(!refresh)

    }







  useEffect(()=>{
    setLoading(true)
    setTimeout(
      ()=>{
        setLoading(false)
      },2000
    )
  },[])
  return (
    <div>
        {
          loading?<div style={{position:'absolute',width:'100%',height:'100%',zIndex:'10000'}}><MyLoader/></div>:<></>
        }

        
        <Router>
      <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Works refreshMainPage={refreshMainPage}  />} path="/workselect"/>
  {/*     <Route element={<AboutMe/>} path="/aboutme"/> */}
  <Route element={<Contacts />} path="/contacts"/>
  <Route element={<Gallery />} path="/gallery"/>
  <Route element={<AboutPage/>} path="/aboutme"/>
   
   
      </Routes>
    </Router>
      
   </div>
  );
}

export default App;
