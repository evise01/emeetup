import {Box, CircularProgress} from "@mui/material";


const Loading = (props) => {
    return (
        <Box sx={{margin: '4rem auto', textAlign: 'center'}}>
            {props.loading ? <CircularProgress/> : <div/>}
        </Box>
    )
}

export default Loading