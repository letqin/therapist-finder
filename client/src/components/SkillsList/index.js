import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_SKILL } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import DeleteIcon from '@mui/icons-material/Delete';

const SkillsList = ({ skills, isLoggedInUser = false }) => {
  const [removeSkill, { error }] = useMutation(REMOVE_SKILL, {
    update(cache, { data: { removeSkill } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeSkill },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveSkill = async (skill) => {
    try {
      const { data } = await removeSkill({
        variables: { skill },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!skills.length) {
    return <h3 
    style={{ 
      marginLeft:'500px',
      padding:'5px',
      paddingLeft: '1000',
      paddingTop: '20px',
      fontSize: '18px',
      fontWeight: 'Normal',
      
    }} 
    > No Skills Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {skills &&
          skills.map((skill) => (
            <div key={skill} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center" 
                style={{ 
                  color:'#71c9e9',
                  marginLeft:'500px',
                  padding:'5px',
                  paddingLeft: '1000',
                  paddingTop: '20px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  
                }} 
                 
                >
                  <span>{skill}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveSkill(skill)
                      }
                      endIcon = {<DeleteIcon />}
                      size="medium"
                      variant= "Filled"
                      color= "white"
                      
                      style={{
                        height: '30px',
                        width: '50px',
                        marginLeft: '10px',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'Normal',
                        backgroundColor: '#314b98',
                        borderRadius: '3px',

                      }}
              
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default SkillsList;
