// our-domain.com/[meetupId]
// Dynamic route

import {MongoClient, ObjectId} from "mongodb";
import MeetupDetail from "../components/meetups/MeetupDetail";

const DetailPage = (props) => {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}

export const getStaticPaths = async () => {
    // connect to MongoDB
    const client = await MongoClient.connect('mongodb+srv://Hamed:SUgoNCsfhs3GqPcn@emeetup.lcik9.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetupsId = await meetupsCollection.find({}, {_id: true}).toArray()

    return {
        fallback: false,
        paths: meetupsId.map((meetupId) => (
            {
                params: {
                    meetupId: meetupId._id.toString()
                }
            }
        ))
    }
}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId

    // connect to MongoDB
    const client = await MongoClient.connect('mongodb+srv://Hamed:SUgoNCsfhs3GqPcn@emeetup.lcik9.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            },
        }
    }
}

export default DetailPage