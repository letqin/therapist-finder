import React, {useState}from 'react';
import { useQuery } from '@apollo/client';
import TherapistsCard from '../components/therapistsCard'
import SearchCard from '../components/searchCard';

import SigninButton from '../components/signinButton' 
import Picture from './../images/TherapistFinderSignBlack.png'
import Picture2 from './../images/TherapistFinderSignWhite.png'

import Banner from './../images/therapistUSA3.png'



import Card from '@mui/material/Card';
/* import { styled } from '@mui/material/styles'; */
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTheme } from '@mui/styles';

/* import Typography from '@mui/material/Typography'; */
import Container from '@mui/material/Container';


/* import Paper from '@mui/material'; 
import Button from '@mui/material/Button';
  
import { makeStyles } from '@mui/styles';

import { indigo, gray } from '@mui/material/colors'; */

/* import ProfileList from '../components/ProfileList'; */

import { QUERY_THERAPISTS } from '../utils/queries';
/* import TextField from '@mui/material/TextField' */

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

  const theme = useTheme();

  const handleSearchSubmit = () =>{
    console.log('submitting')
  
    }
  const [formState, setFormState] = useState({
    first: "",
    last:"",
  })
  console.log(formState)
  
  let handleInputChange = (event) =>{
    console.log(event.target.name, event.target.value)
    setFormState({
        ...formState,
        [event.target.name]: event.target.value
    })
  }
  return (
    
    <main>
      
    <Container>
      
    <Box sx={{
           boxShadow: 12,
           height: '2500px',
           backgroundColor: theme.palette.primary, 
           color: '#fff',
           borderRadius:15, 
           p: 2 }}>
            {/*  <box boxShadow={12} height= '95%'> */}
             <img src= {Banner} alt="USA Banner"
                style={{
                  marginTop: '50px',
                  width:'95%',
                  marginLeft: '30px',
                  boxShadow:3, 
                }}/>
          

      <Grid container spacing={3} justify="center">
      <Box sx={{
          /* display:'flex', 
          flexDirection:'column',
          boxShadow: 8,
          backgroundColor:'#636aa4' */
          }}>
            </Box> 
        <Grid xs={8} p={5}>
        <Card>
            <CardContent sx = {{backgroundColor:  '#636aa4', height: '1940px',}}>
              <Box sx= {{
              display:'flex',
              backgroundColor: '#636aa4',
              flexDirection:'column',
              width: 660,
              height: '1900px',
              boxShadow: 15,
              borderRadius:15, 
          }} >
              {loading ? (
                  <div>Loading...</div>
                ) : (
                  therapists
                  .filter(therapist => {
                    return   therapist.first.includes(formState.first)
                  })
                  .map((therapist, i) => {
                    const isFirst= i === 0
                    const isLast= i === therapists.length -1

                    return(
                    <div>
                      <TherapistsCard isFirst ={isFirst} isLast={isLast} data={therapist} />

                      </div>
                    )
                  })

                )}
              </Box>
          </CardContent>
        </Card>
        </Grid>
        <Grid xs={4} p={2} mt={3}>
          <Box sx= {{
            display:'flex', 
            flexDirection:'column',
            marginTop: '15px',
            width: 300,
            height:600,
            boxShadow: 10,
            borderRadius:10, 
            p: 1
          }}>
            <SearchCard             
            handleSearchSubmit= {handleSearchSubmit}
            formState= {formState}
            handleInputChange= {handleInputChange}/>
          </Box>

         <Grid>
          <box
            sx={{
              display:'flex', 
              flexDirection:'column',
              marginTop: '15px',
              width: 300,
              height:800,
              boxShadow: 10,
              borderRadius:10, 
              p: 1
                  }}>
                <img src= {Picture} alt="Therapist Finder Sign"  
                style={{
                  marginTop: '50px',
                  width:'260',
                  height: '260px',
                }}/>
                <img src= {Picture2} alt="Therapist Finder Sign 2" 
                style={{
                  marginTop: '50px',
                  width:'260',
                  height: '260px',
                }}/>
          </box>
          </Grid> 

        </Grid>
      </Grid>
    </Box>
    </Container>
             

    </main>
  );
};

export default Home;
