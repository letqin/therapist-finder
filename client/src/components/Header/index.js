import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Auth from '../../utils/auth';
import Logo from '../../images/TherapistFinderProject.png'
import Box from '@mui/material/Box';
// import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
/*  import SigninButton from '../signinButton'  */ 

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: 'white'
  // '&:hover': {
  //   backgroundColor: purple[700],
  // },
}));

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
            margin: 8,
            pl:4,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
            }}>
          <img src= {Logo} />
          <Box>
          {Auth.loggedIn() ? (
            <>
              
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>              
              <Link component = {()=> <ColorButton variant = 'outlined'>View my Profile</ColorButton>} to = "/me" style={{textDecoration: 'none' }} />
              <ColorButton variant = 'outlined' onClick={logout}>Signup</ColorButton> 

            </>
          ) : (
            <>
              <Link component = {()=> <ColorButton variant = 'outlined' sx={{mr:2}}>Login</ColorButton>} to = "/login" style={{textDecoration: 'none' }} />
              
              <Link component = {()=> <ColorButton variant = 'outlined'>Signup</ColorButton>} to = "/Signup" style={{textDecoration: 'none' }} />
              {/* <Button className="btn btn-lg btn-light m-2" onClick={logout} size= 'large'
              sx= {{
                margin:3,
                fontSize: '30',
                fontWeight: 'bold',
                fontFamily: 'georgia',
                width: 160,
                mr:8,
                color:'white',
                backgroundColor: '#636aa4',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
              '&:hover': {
                backgroundColor: '#314b98',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
                
              }}}>
                <Link className="btn btn-lg btn-primary m-2" to="/Signup">
                Signup
                </Link>
              </Button> */}
              
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
