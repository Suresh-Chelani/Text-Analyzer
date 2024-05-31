import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// new way to write the default props in the reactjs
export default function Navbar({ title = "Suru-Store", hm = "Home-default", Ab, mod, change }) { // function Navbar(props),  other way
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid" style={mod}>
          <Link className="navbar-brand" to="/suru-store" style={mod}> 
            {title}  {/* other way: {props.title} */}
          </Link> 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={mod}>
                  {hm}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={mod}>
                  {Ab} 
                </Link>
              </li>
              </ul>
              <button onClick={()=>{change('#fd4747')}} className="bg-danger rounded-circle text-white border-1 mx-5 p-1">Red</button>
              <button onClick={()=>{change('#09cd09')}} className="bg-success rounded-circle text-white border-1 mx-5 p-1" >Gen</button>
              <button onClick={()=>{change('#c3c30c')}} className="bg-warning rounded-circle text-white border-1 mx-5 p-1" >Yelo</button>
              <button onClick={()=>{change('skyblue')}} className="bg-info rounded-circle text-white border-1 mx-5 p-1" >info</button>
              {/* <button className="dropdown mx-5"> */}
              {/* <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Feactures
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item active" href="/">Upper-Case</a></li>
                <li><a className="dropdown-item" href="/">Lower-Case</a></li>
                <li><a className="dropdown-item" href="/">Del last Char</a></li>
                <li><a className="dropdown-item" href="/">Del last Word</a></li>
                <li><a className="dropdown-item" href="/">Click to Speak</a></li>
                <li><a className="dropdown-item" href="/">Light Mode</a></li>
              </ul>
            </button> */}

      
          </div>
        </div>
      </nav>

      
    </>
  );
}

// by this we can give the props to the types (sting , number, etc)

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    hm: PropTypes.string
}


// By this we can give me the default propes for the doing the less mistake 
// Navbar.defaultProps = {
//     title:"Suru-Store",
//     hm:"Home-default"
// }