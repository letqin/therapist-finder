import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Auth from '../../utils/auth';
import Logo from '../../images/TherapistFinderProject.png'
import Box from '@mui/material/Box';
// import '@fontsource/roboto/300.css';

/* import { shadows } from '@mui/system';
import Typography from '@mui/material/Typography'; */

/*  import SigninButton from '../signinButton'  */ 
// eslint-disable-next-line
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">

        <Link className="text-dark" to="/">
         {/*  <h1 className="m-0" style={{ fontSize: '3rem' }}>
           TherapistFinder
          </h1> */}
          <Box sx={{
            marginTop: '100px',
            marginLeft:'260px',
            marginRight: '220px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
            }}>
          <img src= {Logo} alt="Therapist Finder Logo"/>
          <Box>
          {Auth.loggedIn() ? (
            <>
              
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <Button className="btn btn-lg btn-light m-2" onClick={logout} size= 'large'
              sx= {{
                color:'white',
                backgroundColor: '#e06c91',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
                boxShadow: '3',
              '&:hover': {
                backgroundColor: '#636aa4',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
                
              }}}>
                Logout
                
              </Button>

            </>
          ) : (
            <>
            <Button className="btn btn-lg btn-light m-2" onClick={logout} size= 'large'
              sx= {{
                margin:3,
                fontSize: '30',
                fontWeight: 'bold',
                fontFamily: 'georgia',
                textAlign: 'center',
                width: 160,
                mr:2,
                color:'#fff',
                backgroundColor: '#e06c91',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
                boxShadow: '3',
              '&:hover': {
                backgroundColor: '#636aa4',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
                
              }
              
                
                }}>
              <Link className="btn btn-lg btn-primary m-2"  to = "/login" style={{textDecoration: 'none' }}>
                Login
              </Link>
              </Button>
              {/* <SigninButton /> */}
              
              <Button className="btn btn-lg btn-light m-2" onClick={logout} size= 'large'
              sx= {{
                margin:3,
                fontSize: '30',
                fontWeight: 'bold',
                fontFamily: 'georgia',
                textAlign: 'center',
                width: 160,
                mr:2,
                color:'#fff',
                backgroundColor: '#e06c91',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
                boxShadow: '3',
              '&:hover': {
                backgroundColor: '#636aa4',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
                
              }}}>
                <Link className="btn btn-lg btn-primary m-2" to="/Signup">
                Signup
                </Link>
              </Button>
              
            </>
          )}
        </Box> 
      </Box>
          
        </Link>

      </div>
    </header>
  );
};

export default Header;
