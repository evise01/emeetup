// our-domain.com/new-meetup

import NewMeetupForm from "../components/meetups/NewMeetupForm";
import axios from "axios";
import {useRouter} from "next/router";

const NewMeetupPage = () => {
    const router = useRouter()
    const addMeetupHandler = async (enteredMeetupData) => {
        // Sending POST Request through out API
        await axios.post('/api/new-meetup', enteredMeetupData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        router.replace('/')
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}

export default NewMeetupPage