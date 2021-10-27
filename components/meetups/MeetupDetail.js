import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import styled from "styled-components";

const DetailCard = styled(Card)`
  margin: 100px auto;
  max-width: 700px;
`

const MeetupDetail = (props) => {
    return (
    <DetailCard elevation={3}>
        <CardMedia
            component="img"
            height="400"
            image={props.image}
        />
        <CardContent>
            <Typography gutterBottom variant="h4" component="h1">
                {props.title}
            </Typography>
            <Typography variant='body1' component='address'>
                {props.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.description}
            </Typography>
        </CardContent>
    </DetailCard>
    )
}

export default MeetupDetail