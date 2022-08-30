import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from '../logo.svg';
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
          <nav>
            <h1>React-App</h1>
            <img src={logo} alt="React Logo"/>

            <ul>
              <li>
                <NavLink to="/home" className={({isActive})=> isActive ? 'nav-active':''}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive})=> isActive ? 'nav-active':''}>About</NavLink>
              </li>
              <li>
                <NavLink to="/users" className={({isActive})=> isActive ? 'nav-active':''}>Users</NavLink>
              </li>
            </ul>

          </nav>

          <Routes>
            <Route path="about" element={<h2>About page</h2>}/>
            <Route path="users" element={<h2>Users page</h2>}/>
            <Route path="/home" element={<h2>Home page</h2>}/>

            <Route path="/*" element={<Navigate to="/home" replace/>}/>
          </Routes>


      </div>
    </BrowserRouter>
  )
}
