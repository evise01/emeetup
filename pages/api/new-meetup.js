// /api/new-meetup

import {MongoClient} from "mongodb"

const handler = async (req, res) => {
    const data = req.body

    // connect to the mongoDB
    const client = await MongoClient.connect('mongodb+srv://Hamed:SUgoNCsfhs3GqPcn@emeetup.lcik9.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    await meetupsCollection.insertOne(data)

    await client.close()

    res.status(201).json({message: 'Meetup inserted!'}) // Success message!
}

export default handler