import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    responses:{
        type: Array,
        required: true
    }
})