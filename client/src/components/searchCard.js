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
            m: 2
        }}>
            <CardContent>Search For a Occupational Therapist that meets your needs</CardContent>
            <CardContent 
            component="form"
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
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </CardContent>
            <CardContent 
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </CardContent>
            <CardContent>
                <Button onClick= {props.handleSearchSubmit}>Search</Button>
            </CardContent>
        </Card>
    )
}

export default SearchCard;