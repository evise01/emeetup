import {useRef} from 'react';
import {Button, Card, TextField, Typography} from "@mui/material";
import styled from "styled-components";

const FormCard = styled(Card)`
  width: 85%;
  text-align: center;
  padding: 1rem 2rem;
  margin: 100px auto;

  @media (max-width: 900px) {
    width: 100%;
  }

  & .MuiFormControl-root {
    margin-bottom: 1rem;
  }

  & button {
    margin-top: 1rem;
    float: right;
  }
`

function NewMeetupForm(props) {
    // -- Refs --
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    // -- Handlers --
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <FormCard>
            <form onSubmit={submitHandler}>
                <Typography
                    sx={{
                        marginBottom: '2rem',
                    }}
                    variant={'h4'}
                    component={'h1'}
                >
                    Add new meetup
                </Typography>
                <TextField
                    inputRef={titleInputRef}
                    id={'title'}
                    label={'Meetup Title'}
                    variant={'outlined'}
                    fullWidth
                    required
                />
                <TextField
                    inputRef={imageInputRef}
                    id={'image'}
                    label={'Meetup Image'}
                    type={'url'}
                    variant={'outlined'}
                    fullWidth
                    required
                />
                <TextField
                    inputRef={addressInputRef}
                    id={'address'}
                    label={'Address'}
                    variant={'outlined'}
                    fullWidth
                    required
                />
                <TextField
                    inputRef={descriptionInputRef}
                    id={'description'}
                    label={'Description'}
                    variant={'outlined'}
                    multiline
                    rows={'5'}
                    fullWidth
                    required
                />
                <Button variant={'contained'} type={'submit'}>Add Meetup</Button>
            </form>
        </FormCard>
    );
}

export default NewMeetupForm;
