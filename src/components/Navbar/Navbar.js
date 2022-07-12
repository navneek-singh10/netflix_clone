import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {useAuth0} from '@auth0/auth0-react';

function Navbar({showSignInButton,logOut,show}) {

    const { user, loginWithRedirect} = useAuth0();

    const {logout} = useAuth0()

    const[dark, setDark] = useState(false);
    const transitionNavbar = () => {
        if(window.scrollY > 120) {
            setDark(true)
        }else {
            setDark(false);
        }
    };

     useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);

        return () => {
            //cleanup function
            window.removeEventListener('scroll', transitionNavbar);

        };
     }, [])   




    return (

        <div className={`navbar_container ${show && 'navbar_color'} ${dark && "navbar_dark"}`}>
            <img 
            className="navbar_logo" 
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Logo" />
            {showSignInButton === false ? (" "): (<Link to='/sign-in'>
            <button onClick={() => loginWithRedirect()}  className="navbar_button">Sign In</button>
            </Link>) }

            {
                logOut && (
                <>
                <h4 className="user_name">{user && `Hi,  ${user.name}`}</h4>
                <p className="navbar_icon" onClick={() => logout({returnTo: window.location.origin})}><ExitToAppOutlinedIcon style={{ fontSize: 35 }} /></p>
                </>
                )
            }
            
        </div>
    );
}
export default Navbar;

{/*https://static.thenounproject.com/png/1139348-200.png*/}