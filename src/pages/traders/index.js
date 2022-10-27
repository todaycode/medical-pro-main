import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button, ButtonGroup, Grid, Input, InputAdornment } from '@mui/material';
import { Search, Close } from '@mui/icons-material';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';


import users from '../../users.json';
import PatientInfoComponent from './patientInfo';


const openPatients = [];

const Traders = () => {

    const userArray = Object.keys(users).map((key) => users[key]);
    let search_key = '';

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const [selectedPatient, SetSelectPatient] = React.useState({uid: ''});
    const [state, setState] = React.useState(true);
    const [patients, setPatients] = React.useState(userArray);

    const patientInfo = (patient) => {
        var j = 0;
        openPatients.map((ele) => {
            if (patient.uid === ele.uid) {
                j++;
            }
            return true;
        })
        if (j === 0) {
            openPatients.push(patient);
        }

        SetSelectPatient(patient);
        setState(false);
    }

    const patientNab = (patient) => {
        SetSelectPatient(patient);
    };

    const closePatientedit = (index) => {
        openPatients.splice(index, 1);
        SetSelectPatient({uid: ''});
        setState(!state);
    }

    const handleChange = (e) => {
        search_key = e.target.value;
        setPatients(userArray.filter(checkName));
    }

    const checkName = (param) => {
        let pattern = new RegExp(search_key, 'i');
        if(param.name.match(pattern)) return param;
    }

    return (
        <>
            <DrawerHeader />
            <Box sx={{ paddingLeft: .1, paddingTop: .1, display: 'flex'}}>
                <div className='row'>
                    <Button sx={{ bgcolor: () => selectedPatient.uid === '' ? '#0a252c' : 'rgb(0 75 95/1)', 
                                color: 'rgb(130 171 183/1)', pl: 3, pt:2.5, pr: 3, pb:1.5, m: 0 }} >
                        <Typography onClick={() => { patientNab({uid: ''}) }}>+ NEW CHART</Typography>
                    </Button>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                    { openPatients.map((ele, i) => {
                        return (
                            <Button
                                key={ele.uid}
                                sx={{ bgcolor: () => selectedPatient.uid === ele.uid ? '#0a252c' : 'rgb(0 75 95/1)', 
                                        color: 'rgb(130 171 183/1)', p: 2, border: 1, borderColor: 'black', marginLeft: '2px' }}
                            >
                                <Typography onClick={() => { patientNab(ele) }}>{ ele.name }</Typography>
                                <Close onClick={() => closePatientedit(i)} />
                            </Button>
                        )
                    })}
                    </ButtonGroup>
                    <Input sx={{ p:0, m: 0, fontSize: '1.2rem', right: 0, position: 'absolute', marginTop: 2 }}
                        startAdornment={
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        }
                        onChange={handleChange}
                    />
                </div>
            </Box>

            { selectedPatient.uid === '' ?
                <Box component="main" sx={{ flexGrow: 1, paddingLeft: 5, marginTop: 4 }}>
                    <Grid container spacing={7}>
                        {patients.map((patient, index) => {
                            return (
                                <Grid item lg={3} md={6} xs={12} key={patient.uid} padding={2} >
                                    <Card sx={{ bgcolor: '#004b5f' }} onClick={() => { patientInfo(patient) }}>
                                        <CardHeader
                                            sx={{ cursor: 'pointer' }}
                                            avatar={
                                                <Avatar sx={{ bgcolor: 'white', width: '3.5rem', height: '3.5rem' }} aria-label="recipe">
                                                    <CardMedia
                                                        sx={{ height: 65, width: 65 }}
                                                        component="img"
                                                        src={'images/users/' + patient.avatar}
                                                        alt="Live from space album cover"
                                                    />
                                                </Avatar>
                                            }
                                            title={<Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)' }}>
                                                { patient.name }
                                            </Typography>}
                                        />
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                :
                <PatientInfoComponent data = {selectedPatient}/>
            }

        </>
    );
}

export default Traders;