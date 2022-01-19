import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';


const SearchCard = (props) =>{
    console.log(props)
    
    return (
        <Card sx = {{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            m: 2,
            marginTop: '10px',
            backgroundColor: '#636aa4', 
            fontWeight: 'bold',
            height:740,
            color: '#fff',
            
        }}>
            <CardContent> Search For a Occupational Therapist that meets your needs 
            </CardContent>
            <CardContent 
            component= "form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            
            >
                <TextField
                    id="first" 
                    label="First Name" 
                    variant="outlined" 
                    name= "first"
                    value={props.formState.first}
                    onChange={props.handleInputChange}
                />
            </CardContent>
            <CardContent 
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField 
                    id="last" 
                    label="Last Name" 
                    variant="outlined" 
                    name= "last"
                    value={props.formState.last}
                    onChange={props.handleInputChange}
                />
            </CardContent>
            <CardContent 
            
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField 
                id="specialty" 
                label="Specialty" 
                variant="outlined" 
                name="specialty"
                value={props.formState.specialty}
                onChange={props.handleInputChange}/>
            </CardContent>
            <CardContent 
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField 
                id="location" label="Location" 
                variant="outlined" name = "location" value={props.formState.location}
                onChange={props.handleInputChange}/>
            </CardContent>
        </Card>
    )
}

export default SearchCard;