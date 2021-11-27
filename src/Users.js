import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex', 
    },
    container :{
        marginTop: theme.spacing(2)
    },
    paper:{
        padding: theme.spacing(2)
    }

}));

export default function Users() {
    const classes = useStyles();

  return (
    <div  className={classes.root}>
        <Container className={classes.container} maxWidth='lg'>
        <Paper className={classes.paper} >
        <Box display="flex" p={1} bgcolor="background.paper">
            <Box p={1} flexGrow={1} bgcolor="grey.300">
                Item 1
            </Box>
            <Box p={1} bgcolor="grey.300">
                Item 2
            </Box>
            <Box p={1} bgcolor="grey.300">
                Item 3
            </Box>
        </Box>
        </Paper>
        </Container>
        
    </div>
  );
}