import * as React from 'react';
import VitalsTable from './vitalsTable';
import TaskList from "./dragdropcomponent";
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import UpDragComponent from './DragAndDrop/index';

import {
    Button,
    Grid,
    TextField,
    Dialog,
    CardHeader,
    Avatar,
    CardMedia,
    Popover,
    Box,
    Typography,
    Select,
    MenuItem,
    FormControl,
    Slider
} from '@mui/material';

import PinDropIcon from '@mui/icons-material/PinDrop';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SubjectIcon from '@mui/icons-material/Subject';
import NoteIcon from '@mui/icons-material/Note';
import PreviewIcon from '@mui/icons-material/Preview';
import AddToPhotosIcon from '@mui/icons-material/LocalHospital';
import SendIcon from '@mui/icons-material/Send';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import OutlinedInput from '@mui/material/OutlinedInput';

import Card from '@mui/material/Card';
import { Stack } from '@mui/system';
import ICD10code from '../../assets/img/ICD10code.png';
import dayjs from 'dayjs';


const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 5 + 8,
            width: 300,
        },
    },
};

const LocationTool = {
    PaperProps: {
        style: {
            maxHeight: 48 * 10 + 8,
            width: 200,
        },
    },
};

const AllergieNames = [
    'Allergy1',
    'Allergy2',
    'Allergy3',
    'Allergy4',
    'Allergy5',
    'Allergy6',
];

const phramacieNames = [
    'Pharmacies1',
    'Pharmacies2',
    'Pharmacies3',
    'Pharmacies4',
    'Pharmacies5'
]

const providerNames = [
    'John Smith, M.D. (Internal Medicine)',
    'Zack Jones, M.D. (Cardiology)',
    'CSRA (home health)',
    'Care South (hospice)'
]

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const Traders = (data) => {
    const patient = data.data;
    const theme = useTheme();
    const [contactInfo, setContactInfo] = useState(10);

    const contactChange = (event) => {
        setContactInfo(event.target.value);
    };

    const [insoneNum, setInsoneNum] = useState(1);

    const insOne = (event) => {
        setInsoneNum(event.target.value);
    };

    const [instowNum, setInstowNum] = useState(1);

    const instow = (event) => {
        setInstowNum(event.target.value);
    };

    const [insthreeNum, setInsthreeNum] = useState(1);

    const insthree = (event) => {
        setInsthreeNum(event.target.value);
    };

    const [weightValue, setWeightValue] = useState(222);
    const [weightBlue, setWeightBlue] = useState(false);
    const [fitValue, setFitValue] = useState(3);
    const [inchValue, setInchValue] = useState(4);
    const [personName, setPersonName] = useState([]);

    const AllergiesChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [phramacieperson, setPhramacieperson] = useState([]);

    const PharmacieChange = (event) => {
        const {
            target: { value },
        } = event;
        setPhramacieperson(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [locationValue, setLocation] = useState([1]);

    const locationChange = (event) => {
        const {
            target: { value },
        } = event;
        setLocation(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [oldnoteValue, setOldnote] = useState([1]);
    const [heightBlue, setHeightBlue] = useState(false);
    const oldnoteChange = (event) => {
        const {
            target: { value },
        } = event;
        setOldnote(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [televistInfo, setTelevistInfo] = useState([1]);
    const televistChange = (event) => {
        const {
            target: { value },
        } = event;
        setTelevistInfo(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [emergencyInfo, setEmergencyInfo] = useState([1]);

    const emergencyChange = (event) => {
        const {
            target: { value },
        } = event;
        setEmergencyInfo(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [dateValue, setDateValue] = useState(dayjs(new Date().toLocaleString()));

    const dateChange = (newValue) => {
        setDateValue(newValue);
    };

    const [providerInfo, setProviderInfo] = useState([]);

    const providerChange = (event) => {
        const {
            target: { value },
        } = event;
        setProviderInfo(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [modelopen, setModelOpen] = useState(false);

    const handleModelOpen = () => setModelOpen(!modelopen);

    const questionAnswer = [
        {
            'question': 'Chief Complaint',
            'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ipsum, dolores dolor sint nam provident autem. Quidem adipisci quasi unde tenetur natus ipsa ullam, eaque veniam eius delectus excepturi perferendis.'
        },
        {
            'question': 'History of Present Illness',
            'answer': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia nemo et nihil ad, molestiae neque quisquam suscipit, repellat saepe odio necessitatibus provident consequatur. Eaque velit ipsam doloremque neque quos.'
        },
        {
            'question': 'Past Medical History',
            'answer': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere ad et blanditiis mollitia nisi nihil veniam facilis! Mollitia iure officia tempore ratione ad dolorem. Voluptates rem unde incidunt nulla?'
        },
        {
            'question': 'Past Surgical History',
            'answer': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt dignissimos recusandae sint minus fugiat maxime rerum in quibusdam voluptas, aliquid, distinctio pariatur. Error illo tempore consequatur voluptate, sapiente autem?'
        },
        {
            'question': 'Medications',
            'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.'
        },
        {
            'question': 'Family History',
            'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.'
        },
        {
            'question': 'Social History',
            'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tempore cum natus enim eveniet, soluta nesciunt voluptatibus ipsa repudiandae. Necessitatibus architecto sed ut id magnam optio facere velit, eveniet quod.'
        }
    ]

    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [SrCr, setSrCr] = useState(1);
    const [CrCl, setCrCl] = useState('');
    const [crclInfo, setCrclInfo] = useState();

    useEffect(() => {
        let val = (
            [Number(Math.floor(weightValue * 0.454)) / Number(Math.floor((fitValue * 30.48) + (inchValue * 2.54))) / Number(Math.floor((fitValue * 30.48) + (inchValue * 2.54)))] * 10000
        ).toFixed(1);
        setBmi(val);
        if (val < 18.5) {
            setInfo(" - Underweight (R63.6)");
        } else if (val > 18.5 && val <= 24.9) {
            setInfo(" - Healthy");
        } else if (val > 24.9 && val < 30) {
            setInfo(" - Overweight (E66.3)");
        } else if (val > 30 && val < 40) {
            setInfo(" - Obesity (E66.09)");
        } else if (val > 40) {
            setInfo("- Morbid obesity (E66.01)");
        } else {
            setInfo("Obese");
        }
        let crclInfoVal = ((Math.floor(weightValue * 0.454) * (140 - 71))) / (SrCr * 72);
        setCrCl(crclInfoVal);

        if (crclInfoVal < 15) {
            setCrclInfo(" CKD S5 (N18.5)");
        } else if (crclInfoVal > 15 && crclInfoVal <= 29) {
            setCrclInfo(" CKD S4 (N18.4)");
        } else if (crclInfoVal > 30 && crclInfoVal < 44) {
            setCrclInfo(" CKD S3b (N18.32)");
        } else if (crclInfoVal > 45 && crclInfoVal < 59) {
            setCrclInfo(" CKD S3A (N18.31)");
        } else if (crclInfoVal > 60 && crclInfoVal < 89) {
            setCrclInfo(" CKD S2 (N18.2) ");

        } else if (crclInfoVal > 90) {
            setCrclInfo(" CKD S1 (N18.1)");
        } else {
            setCrclInfo("End Stage Renal Disease");
        }


    }, [weightValue, fitValue, inchValue, SrCr])

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    const [bmianchorel, setBmianchorel] = React.useState(null);

    const bmihandleClick = (event) => {
        setBmianchorel(event.currentTarget);
    };

    const bmihandleClose = () => {
        setBmianchorel(null);
    };

    console.log(dateValue.$d.toLocaleString());
    const bmiopen = Boolean(bmianchorel);
    const BMIid = bmiopen ? 'simple-popover' : undefined;

    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, paddingLeft: 2 }}>
                <Grid container spacing={1}>
                    <Grid item  >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'white', width: '10rem', height: '10rem' }} aria-label="recipe">
                                    <CardMedia
                                        sx={{ height: 180, width: 180 }}
                                        component="img"
                                        src={'images/users/' + patient.avatar}
                                        alt="Live from space album cover"
                                        // onClick={() => { window.location.href = "" }}
                                    />
                                </Avatar>
                            }
                            title={
                                <Stack>
                                    <Typography gutterBottom sx={{ color: '#24c7f7', fontWeight: 700 }}>
                                         {patient.name} ( {patient.birthday} )
                                    </Typography>
                                    {/* <Stack direction={'row'}>
                                        <Typography sx={{ color: '#31b8df' }}>DOB:</Typography><Typography sx={{ color: 'rgb(130 171 183/1)' }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;11.24.1950</Typography>
                                    </Stack> */}
                                    <Stack direction={'row'}>
                                        <Typography sx={{ color: '#31b8df' }}>Contact:</Typography>
                                        &nbsp;&nbsp;&nbsp;
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={contactInfo}
                                            onChange={contactChange}
                                            MenuProps={MenuProps}
                                            sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                        >
                                            <MenuItem value={30}>(285) 592-2235 (mobile)</MenuItem>
                                            <MenuItem value={10}>(859) 647-2947 (home)</MenuItem>
                                            <MenuItem value={20}>(292) 880-1817 (work)</MenuItem>
                                        </Select>
                                    </Stack>
                                    <Stack direction={'row'}>
                                        <Typography sx={{ color: '#31b8df' }}>Emer:</Typography>
                                        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                        <Typography sx={{ color: 'rgb(130 171 183/1)' }}>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={emergencyInfo}
                                                onChange={emergencyChange}
                                                MenuProps={MenuProps}
                                                label="Select preferred contact"
                                                sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                            >
                                                <MenuItem value={1}> (706) 678-2255 (father)</MenuItem>
                                                <MenuItem value={2}> (706) 678-2255 (mother)</MenuItem>
                                                <MenuItem value={3}> (706) 678-2255 (brother)</MenuItem>
                                            </Select>
                                        </Typography>
                                    </Stack>
                                </Stack>
                            }
                        />
                    </Grid>
                    <Grid item>
                        <Stack sx={{ paddingTop: 6 }} p={2}>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                1° ins:&nbsp;&nbsp;
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={insoneNum}
                                    onChange={insOne}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}>N/a</MenuItem>
                                    <MenuItem value={2}>SP</MenuItem>
                                    <MenuItem value={3}>MCR</MenuItem>
                                    <MenuItem value={4}>MCD</MenuItem>
                                    <MenuItem value={5}>3PART</MenuItem>
                                    <MenuItem value={6}>MCR</MenuItem>
                                    <MenuItem value={7}>MCRADVG</MenuItem>
                                </Select>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                2° ins:&nbsp;&nbsp;
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={instowNum}
                                    onChange={instow}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}>N/a</MenuItem>
                                    <MenuItem value={2}>SP</MenuItem>
                                    <MenuItem value={3}>MCR</MenuItem>
                                    <MenuItem value={4}>MCD</MenuItem>
                                    <MenuItem value={5}>3PART</MenuItem>
                                    <MenuItem value={6}>MCR</MenuItem>
                                    <MenuItem value={7}>MCRADVG</MenuItem>
                                </Select>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                3° ins:&nbsp;&nbsp;
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={insthreeNum}
                                    onChange={insthree}
                                    sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', p: 0, margin: 0 }}
                                >
                                    <MenuItem value={1}>N/a</MenuItem>
                                    <MenuItem value={2}>SP</MenuItem>
                                    <MenuItem value={3}>MCR</MenuItem>
                                    <MenuItem value={4}>MCD</MenuItem>
                                    <MenuItem value={5}>3PART</MenuItem>
                                    <MenuItem value={6}>MCR</MenuItem>
                                    <MenuItem value={7}>MCRADVG</MenuItem>
                                </Select>
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} md={4} xs={12} >
                        <Stack sx={{ paddingTop: 6 }} p={2}>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Allergies:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <FormControl sx={{ m: 0, width: 300 }}>
                                    <Select
                                        multiple
                                        displayEmpty
                                        value={personName}
                                        onChange={AllergiesChange}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>NKDA</em>;
                                            }

                                            return selected.join(', ');
                                        }}
                                        input={<OutlinedInput sx={{ color: 'rgb(130 171 183/1)' }} />}
                                        MenuProps={MenuProps}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        {AllergieNames.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Pharmacies:&nbsp;&nbsp;
                                <FormControl sx={{ m: 0, width: 300 }}>
                                    <Select
                                        multiple
                                        displayEmpty
                                        value={phramacieperson}
                                        onChange={PharmacieChange}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>Select Pharmacies</em>;
                                            }

                                            return selected.join(', ');
                                        }}
                                        input={<OutlinedInput sx={{ color: 'rgb(130 171 183/1)' }} />}
                                        MenuProps={MenuProps}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        {phramacieNames.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)' }}>
                                Providers:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <FormControl sx={{ m: 0, width: 300 }}>
                                    <Select
                                        multiple
                                        displayEmpty
                                        value={providerInfo}
                                        onChange={providerChange}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>John Smith, M.D. (Internal Medicine)</em>;
                                            }

                                            return selected.join(', ');
                                        }}
                                        input={<OutlinedInput sx={{ color: 'rgb(130 171 183/1)' }} />}
                                        MenuProps={MenuProps}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        {providerNames.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12} >
                        <Stack sx={{ paddingTop: 6 }} p={2}>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', display: 'flex', flexDirection: 'row' }}>
                                Weight:&nbsp;&nbsp;
                                {weightBlue ?
                                    <>
                                        <TextField
                                            id="outlined-number"
                                            type="number"
                                            size="small"
                                            value={weightValue}
                                            onChange={(e) => {
                                                if (e.target.value >= 0 && e.target.value <= 350) {
                                                    setWeightValue(e.target.value)
                                                }
                                            }}
                                            sx={{ width: '100px', marginTop: -1 }}
                                            InputLabelProps={{
                                            }}
                                            onBlur={() => { setWeightBlue(false) }}
                                        />lbs</>
                                    :
                                    <Typography onClick={() => { setWeightBlue(true) }}>
                                        {weightValue} lbs / ({Math.floor(weightValue * 0.454)} kg)
                                    </Typography>
                                }
                            </Typography>
                            <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', display: 'flex', flexDirection: 'row' }}>
                                Height:
                                {heightBlue ?
                                    <>
                                        <TextField
                                            id="outlined-number"
                                            type="number"
                                            size="small"
                                            value={fitValue}
                                            onChange={(e) => {
                                                if (e.target.value >= 0 && e.target.value <= 10) {
                                                    setFitValue(e.target.value)
                                                }
                                            }}
                                            sx={{ width: '70px', marginTop: -1 }}
                                            onBlur={() => { setHeightBlue(false) }}

                                        />ft
                                        <TextField
                                            id="outlined-number"
                                            type="number"
                                            size="small"
                                            value={inchValue}
                                            onChange={(e) => {
                                                if (e.target.value >= 3 && e.target.value <= 10) {
                                                    setInchValue(e.target.value)
                                                }
                                            }}
                                            sx={{ width: '60px', marginTop: -1 }}
                                            onBlur={() => { setHeightBlue(false) }}
                                        />in</> :
                                    <>
                                        <Typography onClick={() => { setHeightBlue(true) }}>
                                            &nbsp; &nbsp;  {fitValue} ft
                                        </Typography>
                                        <Typography onClick={() => { setHeightBlue(true) }}>
                                            &nbsp; {inchValue} in
                                        </Typography>&nbsp; ({Math.floor((fitValue * 30.48) + (inchValue * 2.54))} cm)
                                    </>
                                }
                            </Typography>

                            <Typography aria-describedby={id} gutterBottom onClick={handleClick} sx={{ color: 'rgb(130 171 183/1)', display: 'flex' }}>
                                CrCl:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Number(CrCl).toFixed(1)} - {crclInfo}
                                &nbsp;&nbsp;&nbsp;
                                <AddToPhotosIcon sx={{ color: 'rgb(130 171 183/1)', cursor: 'pointer' }} />
                            </Typography>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', margin: "0px !important", bgcolor: '#003847', display: 'flex', alignItems: 'center', padding: 1, paddingBottom: 0 }}>
                                    Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField
                                        id="outlined-number"
                                        size="small"
                                        value={71}
                                        sx={{ width: '70px' }}
                                    />y/o
                                </Typography>
                                <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', margin: "0px !important", bgcolor: '#003847', display: 'flex', alignItems: 'center', padding: 1, paddingBottom: 0, paddingTop: 0 }}>
                                    Weight:
                                    <TextField
                                        id="outlined-number"
                                        size="small"
                                        value={Math.floor(weightValue * 0.454)}
                                        sx={{ width: '70px' }}
                                    />Kg
                                </Typography>
                                <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', margin: "0px !important", bgcolor: '#003847', display: 'flex', alignItems: 'center', padding: 1, paddingTop: 0 }}>
                                    SrCr:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField
                                        id="outlined-number"
                                        type="number"
                                        size="small"
                                        value={SrCr}
                                        onChange={(e) => {
                                            if (e.target.value > 0 && e.target.value <= 100)
                                                setSrCr(e.target.value)
                                        }}
                                        sx={{ width: '70px' }}
                                    />mg/dl
                                </Typography>
                            </Popover>
                            <Typography aria-describedby={BMIid} onClick={bmihandleClick} gutterBottom sx={{ color: 'rgb(130 171 183/1)', display: 'flex' }}>
                                BMI:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{bmi}&nbsp;&nbsp;{info}
                                &nbsp;&nbsp;&nbsp;
                                <AddToPhotosIcon sx={{ color: 'rgb(130 171 183/1)', cursor: 'pointer' }} />
                            </Typography>
                            <Popover
                                id={BMIid}
                                open={bmiopen}
                                anchorEl={bmianchorel}
                                onClose={bmihandleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography gutterBottom sx={{
                                    color: 'rgb(130 171 183/1)',
                                    margin: "0px !important",
                                    bgcolor: '#003847',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: 1,
                                    paddingBottom: 0,
                                    borderBottom: '1px solid rgb(130 171 183/1)',
                                    justifyContent: 'space-between'
                                }}>
                                    <TextField
                                        id="outlined-number"
                                        size="small"
                                        disabled
                                        value={weightValue}
                                    />lbs
                                </Typography>
                                <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', margin: "0px !important", bgcolor: '#003847', display: 'flex', alignItems: 'center', padding: 1, paddingBottom: 0, justifyContent: 'space-between' }}>
                                    <TextField
                                        id="outlined-number"
                                        size="small"
                                        disabled
                                        value={fitValue * 12 + inchValue}
                                    />inch
                                </Typography>
                                <Typography gutterBottom sx={{ color: 'rgb(130 171 183/1)', margin: "0px !important", bgcolor: '#003847', display: 'flex', alignItems: 'center', padding: 0, flexDirection: 'column' }}>
                                    <Slider
                                        size="small"
                                        max={50}
                                        value={bmi}
                                        aria-label="Small"
                                        valueLabelDisplay="auto"
                                    />
                                    <img src={ICD10code} alt="" />
                                </Typography>
                            </Popover>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={1} paddingRight={2} paddingLeft={2} >
                    <Grid item lg={9} md={8} xs={12} >
                        <Box sx={{ border: '1px solid rgb(0 75 95/1)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} p={2}>
                            <Stack direction={'row'} spacing={1} justifyContent={{ xs: 'space-between' }} flexWrap={{ xs: 'wrap' }} sx={{ width: '100%' }}>
                                <Button variant="outlined" startIcon={<PinDropIcon />}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={locationValue}
                                        onChange={locationChange}
                                        MenuProps={LocationTool}
                                        sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', width: 130, p: 0, margin: 0 }}
                                    >
                                        <MenuItem value={1}>LOCATION </MenuItem>
                                        <MenuItem value={2}>OFFICE</MenuItem>
                                        <MenuItem value={3}> PERSONAL</MenuItem>
                                        <MenuItem value={4}>CARE HOME</MenuItem>
                                        <MenuItem value={5}>HOSPITAL</MenuItem>
                                        <MenuItem value={6}>NURSING HOME </MenuItem>
                                        <MenuItem value={7}>HOME</MenuItem>

                                    </Select>
                                </Button>
                                <Button variant="outlined" startIcon={<NoteAddIcon />} >ADD NOTE</Button>
                                <Button variant="outlined" startIcon={<SubjectIcon />} >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={oldnoteValue}
                                        onChange={oldnoteChange}
                                        MenuProps={LocationTool}
                                        sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', width: 130, p: 0, margin: 0 }}
                                    >
                                        <MenuItem value={1}>OLD NOTES </MenuItem>
                                        <MenuItem value={2}>Last 1st note</MenuItem>
                                        <MenuItem value={3}> Last 2st note</MenuItem>
                                        <MenuItem value={4}>Last 3st note</MenuItem>

                                    </Select>
                                </Button>
                                <Button variant="outlined" startIcon={<NoteIcon />}  >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={televistInfo}
                                        onChange={televistChange}
                                        MenuProps={LocationTool}
                                        sx={{ color: 'rgb(130 171 183/1)', border: 'none', height: '24px', width: 130, p: 0, margin: 0 }}
                                    >
                                        <MenuItem value={0}>Note Type</MenuItem>
                                        <MenuItem value={1}>Progress Note </MenuItem>
                                        <MenuItem value={2}>History and Physical</MenuItem>
                                        <MenuItem value={3}> Consult Note</MenuItem>
                                        <MenuItem value={4}>Correspondence</MenuItem>
                                        <MenuItem value={5}>Televisit</MenuItem>
                                        <MenuItem value={6}>Discharge Summary</MenuItem>

                                    </Select>
                                </Button>
                                <Button variant="outlined" startIcon={<PreviewIcon />} onClick={handleModelOpen} >PREVIEW</Button>
                                <Button variant="outlined" startIcon={<SendIcon />} >SEND</Button>
                                <Button variant="outlined" sx={{ height: '40px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DateTimePicker
                                            value={dateValue}
                                            onChange={dateChange}
                                            renderInput={(params) => <TextField {...params} />}
                                            defaultCalendarMonth="2017-05-24T10:30" 
                                            componentsProps={{
                                            actionBar: { actions: ["today"] },
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Button>
                            </Stack>
                            <Stack paddingTop={1} sx={{ width: '100%' }}>
                                <VitalsTable />
                            </Stack>
                        </Box>
                        <Box sx={{ marginTop: 4 }} >
                            <Stack>
                                <Grid container spacing={1}>
                                    <Grid item lg={3} md={4} xs={12} >
                                        <Box sx={{ border: '1px solid rgb(0 75 95/1)' }} p={2} >
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>Chief Complaints</Typography>
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>History of Present Illness</Typography>
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>Past Medical History</Typography>
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>Past Surgical History</Typography>
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>Medications</Typography>
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>Social History</Typography>
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>Family History</Typography>
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>Review of System</Typography>
                                            <Typography variant='h6' mb={2} sx={{ cursor: 'pointer' }}>Physical Exam</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={9} md={8} xs={12} >
                                        <Box sx={{ border: '1px solid rgb(0 75 95/1)', height: '100%' }} p={2} >
                                            <TaskList />

                                            <UpDragComponent />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} xs={12}>
                        <Box sx={{ border: '1px solid rgb(0 75 95/1)', height: '100%', width: '100%' }} p={2}>
                            <Typography>New Orders</Typography>
                            <Typography>   Current Orders</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Dialog
                open={modelopen}
                onClose={handleModelOpen}
            >
                <Card sx={{ bgcolor: '#013644', border: 'none', overflow: 'auto' }}>
                    <Stack direction={"row"} justifyContent={'center'} sx={{ paddingTop: 5 }}>
                        <Typography gutterBottom component="div" variant='h6' sx={{ lineHeight: '1.75rem' }}>
                            History & Physical
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} p={5}>
                        <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 5 }}>
                            name: {patient.name}

                        </Typography>
                        <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                            location: Heritage Health Care
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                            date: 
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 3, paddingTop: 2 }}>
                            provider:
                        </Typography>
                        {questionAnswer.map((index, i) => {
                            return (
                                <Stack key={i}>
                                    <Typography variant='h6' sx={{ paddingLeft: 3, paddingTop: 2 }}>
                                        {index.question}
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ color: 'rgb(130 171 183/1)', fontSize: '.8rem', paddingLeft: 5 }}>
                                        {index.answer}
                                    </Typography>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Card>
            </Dialog>

        </>
    );
}

export default Traders;