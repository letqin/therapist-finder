import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



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
                id="standard-basic" 
                label="Standard" 
                variant="standard" />
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
                id="standard-basic" l
                abel="Standard" 
                variant="standard"/>
            </CardContent>
            <CardContent>
                <Button
                /* className="btn btn-lg btn-light m-2" */
                onClick= {props.handleSearchSubmit}
                
              sx= {{
                width: '200px',
                
                color:'white',
                backgroundColor: '#e06c91',
                border: 1,
                borderRadius: '7px',
                borderColor:'#e06c91',
                boxShadow: '3',
              '&:hover': {
                backgroundColor: '#636aa4',
                border: 1,
                borderRadius: 10,
                borderColor:'#e06c91',
                
              }}}>Search</Button>
            </CardContent>
        </Card>
    )
}

export default SearchCard;