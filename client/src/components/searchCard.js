import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

const SearchCard = () =>{
    return (
        <Card>
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
        </Card>
    )
}

export default SearchCard;