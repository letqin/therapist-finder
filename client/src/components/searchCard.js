import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const SearchCard = () =>{
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
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </CardContent>
            <CardContent 
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="filled-basic" label="Filled" variant="filled" />
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
                <Button variant>Search</Button>
            </CardContent>
        </Card>
    )
}

export default SearchCard;