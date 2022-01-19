import React from 'react';
import { Link } from 'react-router-dom';    
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import '@fontsource/roboto/300.css';


const TherapistsCard = (props)=> {
    console.log(props.data)
    let borderRadiusTop = null
    let borderRadiusButtom = null

    if (props.isFirst){
        borderRadiusTop = "100px 100px 0 0"
    }
    else if (props.isLast){
        borderRadiusButtom = "0 0 15px 15px"
    }

    return (
        <Card 
            elevation={0}
            sx={{ 
            /* minWidth: 250, */ 
            display: "flex",
            borderRadius:borderRadiusTop , 
            backgroundColor: '#636aa4',
            color: 'white',
            paddingLeft: '20px',
            paddingTop: '20px',
            
            }}
            >
            <CardContent>
                <Link className="btn btn-lg btn-primary m-2" underline="none" to={"/therapistPage/" + props.data._id}>

                    <Typography variant= "h1">{props.data.first} {props.data.last}</Typography>
                </Link>
            </CardContent>
            <CardActions sx={{
                 borderRadius: borderRadiusButtom
            }}>
                <Button
                /* variant='text' 
                color= 'white' 
                fontSize= '10px' */
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )

}

export default TherapistsCard;
