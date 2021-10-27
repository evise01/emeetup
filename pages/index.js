// our-domain.com/

import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";

const Home = props => (
    <MeetupList meetups={props.meetups}/>
)

export const getStaticProps = async () => {
    const client = await MongoClient.connect('mongodb+srv://Hamed:SUgoNCsfhs3GqPcn@emeetup.lcik9.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    await client.close()

    return {
        props: {
            meetups: meetups.map((meetup) => (
                {
                    id: meetup._id.toString(),
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                }
            )),
        },
        revalidate: 10,
    }
}

export default Home
