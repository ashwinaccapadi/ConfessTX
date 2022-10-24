import React from 'react';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

export const Question = ({ question }) => {
    return (
        <Paper sx={{ maxWidth:800,p:3, align:'center', border: 0.01, borderStyle: 'solid', borderColor: 'orange'}}>
                <Typography variant="body">
                    {question.text}
                </Typography>
                <br></br>
                <br></br>
        </Paper>
        
    );
}