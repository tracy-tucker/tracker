//This is where we store our database collection.

import mongoose, { Schema } from 'mongoose';

const EventsSchema = new Schema({
    date: {
        type: Date,
        required: true,
        unique: true //this prevents saying you completed the habit twice in one day
    }
});

export const HabitsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    events: [EventsSchema] //adding events to the HabitsSchema
});

export default mongoose.models.habits || mongoose.model('habits', HabitsSchema);
//send changes to mongoose habits model OR create the model