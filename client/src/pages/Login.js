import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import { Container } from '@mui/material';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Container sx={{
      height:"300px",
      marginTop: "30px",
      boxShadow: 12,
      backgroundColor:'#62667f',
      borderRadius:15, 
      p: 2 
      }}> 
    
    
    {/* <main className="flex-row justify-center mb-4"> */}
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2"
          style={{ 
            paddingLeft: '10px',
            paddingTop: '10px',
            color:'white',
            fontSize: '30px',

          }}
          
          >LOGIN</h4>
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
                  placeholder="Your email"
                  name="email"
                  type="email"
                  style={{ 
                    width: '460px',
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
                    width: '460px',
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

export default Login;
