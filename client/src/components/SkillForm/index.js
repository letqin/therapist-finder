import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SKILL } from '../../utils/mutations';

import Auth from '../../utils/auth';



const SkillForm = ({ profileId }) => {
  const [skill, setSkill] = useState('');

  const [addSkill, { error }] = useMutation(ADD_SKILL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addSkill({
        variables: { profileId, skill },
      });

      setSkill('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
      style={{ 
        marginLeft:'500px',
        padding:'5px',
        width: '200px',
        height: '50px',
        paddingLeft: '1000',
        paddingTop: '20px',
        fontSize: '18px',
        fontWeight: 'Normal',
        backgroundColor: '#e06c91',
        borderRadius: '7px',
        '&:hover':{
                backgroundColor: '#636aa4',
              }
      }}>
        Add a therapist here.</button>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
            style={{ 
              width: '40%',
              marginLeft:'500px',
              marginTop:'20px',
              marginBottom: '20px',
              padding:'5px',
              paddingLeft: '1000',
              paddingTop: '20px',
             
            }} 
              placeholder="Endorse some skills..."
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit"
            style={{ 
              marginLeft:'500px',
              padding:'5px',
              width: '200px',
              height: '50px',
              paddingLeft: '1000',
              paddingTop: '20px',
              fontSize: '18px',
              fontWeight: 'Normal',
              backgroundColor: '#e06c91',
              borderRadius: '7px',
              '&:hover': {
              backgroundColor: '#636aa4',
              }
            }} 
            >
              Endorse Skill
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p
        style={{ 
          marginLeft:'500px',
          padding:'5px',
          paddingLeft: '1000',
          paddingTop: '20px',
          fontSize: '18px',
          fontWeight: 'Normal',
        }}
        >
          You need to be logged in to add a therapist. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default SkillForm;
