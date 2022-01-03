import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => (
    <Grid container>
        <Grid item xs={2}>
            <Item>some text</Item>
        </Grid>
        <Grid item xs={10}>
            <Item>some text</Item>
        </Grid>
    </Grid>
);

export default Home;
