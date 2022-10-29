import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Grid, ButtonGroup, Radio, RadioGroup, FormControlLabel, FormControl, Checkbox, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import './style.css';
// import ProblemDetail from './DragAndDrop';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    padding: 5,
    '& .MuiInputBase-input': {
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const SelectTool = {
    PaperProps: {
        style: {
            maxHeight: 48 * 10 + 8,
            width: 150,
        },
    },
};

const Diseases = [
    'Diabetes (11.9)', 'Generalized Anxiety Discorder (41.1)', 'Palpitations (00,2)'
]

const RaidoItems = [
    'Acute', 'Active', 'Historical'
]

export default function PrimarySearchAppBar() {

    const [activeProblemBtn, setActiveProblemBtn] = useState(1);
    const [selectedProblem, setSelectProblem] = useState(2);

    const onClickViewButton = (val) => {
        console.log(val);
        setSelectProblem(val);
    }

    return (
        <Box>
            <AppBar position="static">
                <h3 className='problem-title' >Problem List</h3>
                <Toolbar className='problem-toolbar'>
                    <Box style={{display: 'flex'}}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
                            <ExpandMoreIcon />
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search (IDC10)"
                                inputProps={{ 'aria-label': 'search' }}
                                style={{marginTop: 5}}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1 } }} >
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button className={ activeProblemBtn === 0 ? 'problem-button-active' : ''} onClick={() => { setActiveProblemBtn(0) }}>Brief</Button>
                            <Button className={ activeProblemBtn === 1 ? 'problem-button-active' : ''} onClick={() => { setActiveProblemBtn(1) }}>Detail</Button>
                        </ButtonGroup>
                    </Box>
                    <Box>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                {  RaidoItems.map((ele) => {
                                    return (
                                        <FormControlLabel style={{height: 25}} value={ele} control={<Radio />} label={ele}/>
                                    )
                                })}
                            </RadioGroup>
                        </FormControl>
                        <Button className='apply_button'>Apply Selected</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box className='problem-container'>
                {[0, 1, 2].map((val, key) => {
                    return (
                        <Stack className='problem-list' key={key}>
                            <Stack direction={'row'} className='problem-list-item'>
                                <Grid direction={'row'} lg={4} md={4} xs={4}  sx={{ml:3}}>
                                    <FormControlLabel control={<Checkbox key={key} defaultChecked = { key === 0 ? false : false} />} />
                                    <Typography variant="p" style={{marginTop: 10}}>{Diseases[key]}</Typography>
                                </Grid>
                                <Grid direction={'row'} lg={4} md={4} xs={4} style={{display: 'flex', justifyContent: 'center'}}>
                                    <Box className='dad-button'>DAD</Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1 } }} >
                                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <Button className={ selectedProblem !== key ? 'problem-button-active' : ''}
                                                onClick={(e) => { onClickViewButton(null);}}
                                            >Brief</Button>
                                            <Button className={ selectedProblem === key ? 'problem-button-active' : ''}
                                                onClick={(key) => { onClickViewButton(key); console.log(key) }}
                                            >Detail</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Grid>
                                <Grid direction={'row'} spacing={1} lg={4} md={4} xs={4} style={{display: 'flex', justifyContent: 'right'}}  sx={{mr:2}}>
                                    <Stack direction={'column'} sx={{mr:5}}>
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue=""
                                                name="radio-buttons-group"
                                            >
                                                {  RaidoItems.map((ele) => {
                                                    return (
                                                        <FormControlLabel style={{height: 25}} value={ele} control={<Radio />} label={ele}/>
                                                    )
                                                })}
                                            </RadioGroup>
                                        </FormControl>
                                    </Stack>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <FormatListBulletedIcon />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                    >
                                        <CloseIcon/>
                                    </IconButton>
                                </Grid>
                            </Stack>
                            {/* <ProblemDetail selectedProblem = {selectedProblem} index = {key}/> */}
                            <Stack className='problem-list-detail' style={{display: selectedProblem !== key ? 'none' : ''}}>
                                { ['S', 'O', 'A', 'P'].map((ele) => {
                                    return (
                                        <Stack direction={'row'} className='soap-list'>
                                            <Box className='soap-text'>
                                                <Typography>{ele}</Typography>
                                            </Box>
                                            <Box className='soap-input'>
                                                <TextField/>
                                            </Box>
                                        </Stack>
                                    )
                                })}
                            </Stack>

                        </Stack>
                    )
                })}
                <Box className='add-container'>
                    <Box style={{display: 'flex'}}>
                        <TextField id="filled-search" type="search" variant="filled" placeholder='Search (IDC10)' style={{backgroundColor: '#003847'}}/>                    
                    </Box>
                    <Box style={{display: 'flex', marginLeft: '10%'}}>
                        <FormControl style={{marginTop: 10}}>
                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"  name="row-radio-buttons-group" >
                                { RaidoItems.map((ele) => {
                                    return(
                                        <FormControlLabel value={ele} control={<Radio />} label={ele} />
                                    ) 
                                })}
                            </RadioGroup>
                        </FormControl>
                        <Button className='add-button'>Add</Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}


