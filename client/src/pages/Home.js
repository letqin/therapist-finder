import React from 'react';
import { useQuery } from '@apollo/client';
import TherapistsCard from '../components/therapistsCard'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProfileList from '../components/ProfileList';
import { QUERY_THERAPISTS } from '../utils/queries';


//creating a styled component for the search section
const SearchCard = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  p: 1,
  m: 1
}); 


const Home = () => {
  const { loading, data } = useQuery(QUERY_THERAPISTS);
  const therapists = data?.therapists || [];

  return (
    
    <main>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            {loading ? (
                <div>Loading...</div>
              ) : (
                therapists.map(therapist => {
                  
                  return(
                    <TherapistsCard data={therapist} />

                
                  )
                })
                // <ProfileList
                //   profiles={profiles}
                //   title="Here's the current roster of friends..."
                // />
              )}
          </Grid>
          <Grid xs={4}>
            <SearchCard>
              <Box 
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </Box>
              <Box 
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled-basic" label="Filled" variant="filled" />
              </Box>
              <Box 
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </Box>
              <Box 
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </Box>
            </SearchCard>
          </Grid>
        </Grid> 
      </Box>
</main>
  );
};

export default Home;
