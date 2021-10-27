import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import styled from "styled-components";
import {useRouter} from "next/router";

const ItemMeetup = styled(Card)`
  max-width: 350px;
  width: 350px;
  text-align: center;
  margin: 0;
`

function MeetupItem(props) {
    const router = useRouter();

    const showDetailHandler = () => {
        router.push(`/${props.id}`)
    }
    return (
        <ItemMeetup item elevation={2}>
            <CardMedia
                sx={{
                    objectFit: 'cover',
                }}
                component="img"
                height="200"
                image={props.image}
                alt={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h3">
                    {props.title}
                </Typography>
                <Typography variant='body1' component='address'>
                    {props.address}
                </Typography>
                <Button
                    sx={{
                        marginTop: '2rem',
                    }}
                    onClick={showDetailHandler}
                    variant={'outlined'}
                >
                    Show Details
                </Button>
            </CardContent>
        </ItemMeetup>
    )
}

export default MeetupItem;
