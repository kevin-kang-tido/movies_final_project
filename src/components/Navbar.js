import React, { useEffect } from 'react'
import myimage from '../utilities/assets/logo movies.PNG'
import '../utilities/CSS/navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../redux/actions/profileAction'
import { logout } from '../redux/actions/authAction'


export default function Navbar() {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const {isLogin} = useSelector(state => state.authReducer)
  const {profile} = useSelector(state => state.profReducer)
  const {auth} = useSelector(state => state.authReducer)
  
  useEffect(()=>{
    dispatch(fetchProfile(isLogin ? auth.access_token :""))
  },[])
  return (
    <div className="position-sticky top-0 z-1">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 nav_css">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img className='mx-5' src={myimage} alt="" style={{width:"5rem"}}/>
      </a>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item dropdown">
          <a className="nav-link text-white link-secondary font-weight-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movies
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/popularmovies">Popular</NavLink></li>
            <li><NavLink className="dropdown-item" to="/nowplaying">Now Playing</NavLink></li>
            <li><NavLink className="dropdown-item" to="/upcoming">Upcoming</NavLink></li>
            <li><a className="dropdown-item" href="#">Top Rated</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-white link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TV Show
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/populartv">Popular</NavLink></li>
            <li><a className="dropdown-item" href="#">Airing Today</a></li>
            <li><a className="dropdown-item" href="#">On TV</a></li>
            <li><a className="dropdown-item" href="#">Top Rated</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-white link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            People
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/popularpeople">Popular</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-white link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Discussions</a></li>
            <li><a className="dropdown-item" href="#">Leaderboard</a></li>
            <li><a className="dropdown-item" href="#">Support</a></li>
            <li><a className="dropdown-item" href="#">API</a></li>
          </ul>
        </li>
        <li className="">
          <a className="nav-link text-white link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-magnifying-glass w-25"></i>
          </a>
        </li>
      </ul>
      <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          } 
          to={"/profile"}>
        <img 
          src={isLogin ? profile.avatar : "https://i.pinimg.com/474x/9c/c5/e0/9cc5e0039ef0b6ee1f8b33ae2a92837d.jpg"}
          alt="" 
          width={40} 
          className="rounded-circle mx-3 my-2" />
      </NavLink>


      <div className="col-md-3 text-end mx-5">
        <button type="button" className="btn  me-2 css_login">Join Now</button>
        <button 
        type="button"
         className="btn css_joinnow"
         onClick={() => isLogin ? dispatch(logout()):navigate("/login")}
         >
        { isLogin ? "Logout":"Log In"}
        </button>
      </div>
    </header>
  </div>
  )
}
