import Event from '../Models/event.model.js';

export const createEvent = async(req,res)=>{
    const {eventName, eventDate, eventTime, eventLocation, eventDescription} = req.body;
    try{
        const event = await Event.create({
            eventName,
            eventDate,
            eventTime,
            eventLocation,
            eventDescription
        })
        res.status(201).json({event});
    }catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
}

export const getEvent  = async(req,res)=>{
    try{
        const getEvents = await Event.find();
        res.status(200).json({
            getEvents
        })
    }catch(err){
        console.error(`Error: ${err.message}`)
    }
}
