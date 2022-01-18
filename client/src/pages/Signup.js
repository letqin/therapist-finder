import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container sx={{
      height:"300px",
      marginTop: "30px",
      boxShadow: 12,
      backgroundColor:'#314b98',
      borderRadius:15, 
      p: 2 
      }}> 
   {/* <main className="flex-row justify-center mb-4"> */}
      
      <div className="col-12 col-lg-10">
        <div className="card">

          <h4 className="card-header text-light ml-5 p-2"
          style={{ 
            paddingLeft: '10px',
            paddingTop: '10px',
            color:'white',
            fontSize: '30px',

          }}> SIGN UP </h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              
              <form onSubmit={handleFormSubmit}>
                <input
                
                  className="form-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  style={{ 
                    width: '320px',
                    height: '50px',
                    color:'block',
                    paddingLeft: '15px',
                  }}
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  style={{ 
                    width: '320px',
                    height: '50px',
                    color:'block',
                    paddingLeft: '15px',
                  }}
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  style={{ 
                    width: '310px',
                    height: '50px',
                    color:'block',
                    paddingLeft: '15px',
                  }}
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ 
                    cursor: 'pointer',
                    width: '200px',
                    height: '50px',
                    color:'block',
                    fontWeight: 'bold',
                    paddingLeft: '15px',
                 }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
             
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
      
  {/* </main> */}

   </Container>
    
  );
};

export default Signup;

