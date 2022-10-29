import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const ProblemDetail = (data) => {
    const selectedProblem = data.selectedProblem;
    const index = data.index;
    return (
        <Stack className='problem-list-detail'style={{display: selectedProblem !== index ? 'none' : ''}}>
            <Box sx={{width: '10%'}}>
                <Typography>S</Typography>
                <Typography>O</Typography>
                <Typography>A</Typography>
                <Typography>P</Typography>
            </Box>
            <Box>

            </Box>
        </Stack>
)
}

export default ProblemDetail;