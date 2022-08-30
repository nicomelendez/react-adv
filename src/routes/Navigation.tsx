import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { routes } from "./routes";

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
          <nav>
            <NavLink to="/home" className="logo-content">
              <img className="logo" src={logo} alt="React Logo"/>
              <h1>React-App</h1>
            </NavLink>
            
            <ul>
            {
              routes.map(({to,name})=>{
                return(
                  <li key={to}>
                    <NavLink 
                        className={({isActive})=> isActive ? 'nav-active':''} 
                        to={to}>
                        {name}
                    </NavLink>
                  </li>
                )
              })
            }
            </ul>

          </nav>

          <Routes>
            
            {routes.map(({to,path,Component})=>{
              return(
                <Route key={to} 
                       path={path} 
                       element={<Component/>} 
                />
              )
            })}
            
            <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>

          </Routes>



      </div>
    </BrowserRouter>
  )
}
