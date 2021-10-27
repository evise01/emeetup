import MeetupItem from './MeetupItem';
import styled from "styled-components";
import {Box} from "@mui/material";

const Meetups = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 100px auto;
  width: 85%;

  @media (max-width: 900px) {
    width: 100%;
    margin: 50px auto;
    flex-direction: column;
    align-items: center;
  }
`

function MeetupList(props) {
    return (
        <Meetups>
            {props.meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            ))}
        </Meetups>
    );
}

export default MeetupList;
