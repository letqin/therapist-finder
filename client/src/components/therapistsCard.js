import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const TherapistsCard = (props)=> {
    console.log(props)

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography>{props.data.first}{props.data.last}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" >Learn More</Button>
            </CardActions>
        </Card>
    )

}

export default TherapistsCard;