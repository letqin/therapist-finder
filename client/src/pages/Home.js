import React from 'react';
import { useQuery } from '@apollo/client';
import TherapistsCard from '../components/therapistsCard'
import SearchCard from '../components/searchCard'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import ProfileList from '../components/ProfileList';
import { QUERY_THERAPISTS } from '../utils/queries';
import { CardContent } from '@mui/material';


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
            <SearchCard />
          </Grid>
        </Grid> 
      </Box>
</main>
  );
};

export default Home;
