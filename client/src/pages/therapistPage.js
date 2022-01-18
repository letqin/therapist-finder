import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useQuery } from '@apollo/client';
import { QUERY_THERAPISTS } from '../utils/queries';

let TherapistPage = () => { 
    const { loading, data } = useQuery(QUERY_THERAPISTS);
    const therapists = data?.therapists || [];


    return (
        <main>
            <Grid container spacing={2}>
                <Grid  xs={8}>

                </Grid>
                <Grid xs={4}>
                    
                    {loading ? 
                        (
                            <div>Loading...</div>
                        ) : (
                            
                                    <>
                                        <Typography variant="h1">{therapists[0]}</Typography>
                                        <Typography variant="h1"></Typography>
                                        <Typography variant="h1"></Typography>
                                        <Typography variant="h1"></Typography>
                                    </> 
                        )
                    }
                </Grid>
            </Grid>
    
        </main>
    )
}

export default TherapistPage
