import React from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Joe from '../images/Joe.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import HealthAndSafetyIcon from "@mui/icon-materials/HealthAndSafetyIcon"
import { useQuery } from '@apollo/client';
import { QUERY_THERAPIST } from '../utils/queries';

let TherapistPage = () => { 
    const { therapistId } = useParams();
    const { loading, data } = useQuery(QUERY_THERAPIST,{variables: {therapistId: therapistId}
    });

    const theme = useTheme();
    console.log(data, "line")
    // const therapist = data.therapist || "whoops";
//   console.log(therapist)


    const SaucyBoi = () =>{ 
        
        return (

        <Card sx={{
            backgroundColor: '#636aa4',
            marginRight: '0'
        }}>
        <CardContent>
        <img src= { Joe } alt="therapist"/>
        </CardContent>
        </Card>
        
        )
    }

    return (

        <main
        style={{
            marginRight:'200px',
        }}
        >

            <Grid container spacing={1}>
                <Grid  xs={8}>
                {/* <HealthAndSafetyIcon /> */}
                <Box sx={{
                    display:'flex',
                    justifyContent: 'center'}}>
                    <SaucyBoi />
                </Box>
                </Grid>
                <Grid xs={4}>
                    <Box style={{
                        m:1
                        }}>

                    {loading ? 
                        (
                            <div>Loading...</div>
                        ) : (
                            
                            <>
                            <Card sx={{
                            
                                backgroundColor: '#636aa4',
                                color: 'white',
                              
                    }}>
                                <CardContent> 
                                    <Box sx={{
                                }}>
                                    
                            <Typography
                                variant="h1">
                                {data.therapist.first} {data.therapist.last}
                            </Typography>  

                            <Typography 
                            variant="h1">{data.therapist.specialty}
                            </Typography>

                            <Typography 
                            variant="h1">{data.therapist.location}</Typography>
                             <Typography variant="h1">https://aca-prod.accela.com/MILARA/GeneralProperty/PropertyLookUp.aspx?isLicensee=Y&TabName=APO</Typography>
                            <Button variant="outline">Go Back</Button>
                            </Box>
                            </CardContent>
                            </Card>
                            </> 
                        )
                    }
                    </Box>
                </Grid>
            </Grid>
                    
        </main>
          
    
        
    )
}

export default TherapistPage
