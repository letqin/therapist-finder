import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  // const location = useLocation();
  // const history = useHistory();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">

        <div className="container text-center"  
        style={{
          marginTop: '30px',
          marginLeft:'1250px',
          color:'#fff',
        }}>
        <h4> &copy; {new Date().getFullYear()} - TherapistFinder</h4>
        </div>
      </div>
    </footer>
  );
};
// {location.pathname !== '/' && (
//   <button
//     className="btn btn-dark mb-3" onClick={() => history.goBack()}
//     style={{
//       height:'50px',
//       width:'200px',
//       backgroundColor: '#e06c91',
//       borderRadius: '15px',
//       marginTop: '40px',
//       marginLeft:'1250px',
//       color:'#fff',
//       fontSize:'25px',
      
//       /* '&:hover':{
//         backgroundColor: '#636aa4',
//         border: 1,
//         borderRadius: 10,} */

//       }}>
      
//     &larr; Go Back
//   </button>
// )}

export default Footer;
