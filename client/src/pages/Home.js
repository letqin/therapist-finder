import React from 'react';
import { useQuery } from '@apollo/client';
import TherapistsCard from '../components/therapistsCard'
import SearchCard from '../components/searchCard';
import SigninButton from '../components/signinButton' 

/* import { styled } from '@mui/material/styles'; */

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


/* import Typography from '@mui/material/Typography'; */
import Container from '@mui/material/Container';


/* import Paper from '@mui/material'; 
import Button from '@mui/material/Button';
  
import { makeStyles } from '@mui/styles';

import { indigo, gray } from '@mui/material/colors'; */

/* import ProfileList from '../components/ProfileList'; */

import { QUERY_THERAPISTS } from '../utils/queries';
/* import TextField from '@mui/material/TextField' */


/* const useStyles = makeStyles ({
  root:{
    background: indigo,
    border: 1,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})
 */
/* const theme = createTheme({
  palette: {
    primary: {
      light: '#71c9e9',
      main: '#636aa4',
      dark: '#314b98',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f99b35',
      main: '#e06c91',
      dark: '#58595b',
      contrastText: '#fff',
    },
  },
});
 */

const Home = () => {
  const { loading, data } = useQuery(QUERY_THERAPISTS);
  const therapists = data?.therapists || [];


  return (
    
    <main>
    {/*   <ThemeProvider theme={theme}> */}

      {/* <typography variant="h2">
        Search fot a therapist
      </typography>

      <buttonGroup variant="contained" color= '#58595b' size="medium">
        <button>
        SignIn
        </button>
        <button>
        Sign Out
        </button>
      </buttonGroup>

      <textfield 
      variant= 'outlined'
      color= '#e06c91'
      //type="date"
      /> */}
      
    <Container>
      
    <Box sx={{
           boxShadow: 4,
           bgcolor: '#636aa4', 
           color: '#fff',
           borderRadius:15, 
           p: 2 }}>

      <Grid container spacing={3} justify="center">
      <Box sx={{display:'flex', 
          flexDirection:'column',
          boxShadow: 4,
          }}>
            </Box>
        <Grid xs={8} p={5}>
        <Box sx= {{display:'flex', 
          flexDirection:'column',
          width: 720,
          height:740,
          boxShadow: 15,
          borderRadius:15, 
           p: 2
          }}>
        {loading ? (
            <div>Loading...</div>
          ) : (
            therapists.map(therapist => {
              
              return(
               <div>
                <TherapistsCard data={therapist} />
                {/* <signinButton /> */}
                </div>
              )
            })
            // <ProfileList
            //   profiles={profiles}
            //   title="Here's the current roster of friends..."
            // />
          )}
          </Box>
        </Grid>
        <Grid xs={4} p={2} mt={3}>
          <Box sx= {{display:'flex', 
          flexDirection:'column',
          width: 300,
          height:740,
          boxShadow: 10,
          borderRadius:10, 
          p: 1
          }}>
            <SearchCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
             
    {/* </ThemeProvider> */}
    </main>
  );
};

export default Home;
