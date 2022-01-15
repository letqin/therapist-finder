import React from 'react';
import { useQuery } from '@apollo/client';
import TherapistsCard from '../components/therapistsCard'
import signinButton from '../components/signinButton'

import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import textfield from '@mui/material/textfield';
import typography from '@mui/material/typography';

import container from '@mui/material/container';
import Paper from '@mui/material';

import { createTheme } from '@mui/material/styles';
import {makeStyles, ThemeProvider, createMuiTheme} from '@mui/material/makeStyles';

import { indigo, gray } from '@mui/material/colors';

import AppTheme from './components/AppTheme';
import ProfileList from '../components/ProfileList';
import { QUERY_THERAPISTS } from '../utils/queries';


const useStyle = makeStyles((theme) => ({
    button:{
        color: 'white',
        backgroundColor: '#636aa4'
    },
}));

const App =() => {
    const classes = useStyle('')
    return (
        <div>
        <button 
        variant="contained" 
        size ="large" 
        startIcon = {<Person/>}>
            className = {classes.button}
        SIGN IN
        </button>
        </div>




    )
}