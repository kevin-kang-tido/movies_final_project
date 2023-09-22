import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/404';
import Popularpage from './components/Popularpage';
import Onemoviepages from './components/Onemoviepages';
import Popularpeople from './pages/Popularpeople';
import Login from './pages/Login';
import Popularmovies from './pages/Popularmovies';
import Nowplaying from './pages/Nowplaying';
import PopularTVshow from './pages/PopularTVshow';


function App() {
  return (
    <div className='App d-relative'>
      <Routes>
         {/* <MyCustomNavBar/>  */}
        <Route path='/' element={<Mainlayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/popular' element={<Popularpage/>}/>
         
          <Route path='/onemovies' element={<Onemoviepages/>}/>
          <Route path='/popularpeople' element={<Popularpeople/>}/>
          <Route path='/popularmovies' element={<Popularmovies/>}/>
          <Route path='/nowplaying'    element={<Nowplaying/>}/>
          <Route path='/populartv'     element={<PopularTVshow/>}/>



          <Route path='/*' element={<NotFound/>}/>
          
        </Route>

        <Route path='/login' element={<Login/>}/>

      </Routes>
      

    </div>
  );
}

export default App;

function Mainlayout(){
  return(
    <div  className='p-relative '>
    <Navbar/>

    <div className='overflow-hidden'>
      <Outlet/>
    </div>
    <Footer/>   
   
    </div>
  )
}
