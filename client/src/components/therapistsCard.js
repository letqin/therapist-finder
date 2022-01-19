import React from 'react';
import { Link } from 'react-router-dom';    
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fontWeight } from '@mui/system';
// import '@fontsource/roboto/300.css'


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
            paddingLeft: '20px',
            paddingTop: '20px',
            
            }}
            >
            <CardContent>
                <Link className="btn btn-lg btn-primary m-2" underline="none" to={"/therapistPage/" + props.data._id}>

                    <Typography variant="body1" gutterBottom
                    style={{ 
                        marginTop: '10px',
                        marginLeft: '10px',
                        fontSize: '20px',
                        fontFamily: 'sans-serif',
                        color: '#fff',
                        fontWeight: 'normal',
                    }}
                    
                    >{props.data.first} {props.data.last}</Typography>
                </Link>
                <Box sx ={{
                    pt:2,
                    pb:2
                }}>
                <Typography variant="h2">{props.data.specialty}</Typography></Box>
                <Typography variant= "h2">{props.data.location}</Typography>
            </CardContent>
            <CardActions sx={{
                 borderRadius: borderRadiusButtom
            }}>
                <Button
                style={{
                    color:'#314b98',
                    marginTop: '10px',
                    fontSize: '10px',
                    fontWeight:'normal',
                    fontStyle: 'italic',
                }}>
                    Learn more
                </Button>
            </CardActions>
        </Card>
    )

}

export default TherapistsCard;
