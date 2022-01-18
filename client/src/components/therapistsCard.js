import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';


const TherapistsCard = (props)=> {
    console.log(props)

    return (
        <Card sx={{ 
            /* minWidth: 250, */ 
            bgcolor: '#636aa4',
            color: 'white',
            }}
            >
            <CardContent>
                <Typography>{props.data.first}{props.data.last}</Typography>
            </CardContent>
            <CardActions>
                <Button
                /* variant='text' 
                color= 'white' 
                size="small" */ 
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )

}

export default TherapistsCard;