import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string; // Dấu '?' là để biểu thị trường có thể có hoặc không
    location?: string;
    createAt?: Date;
    imageUrl: string;
    startDateTime?: Date;
    endDateTime?: Date;
    price?: string;
    isFree?: boolean;
    url?: string;
    category?: {_id: string, name: string}; // Thay vì 'ref: 'Category'', vì TypeScript không hiểu được ref
    organizer?: {_id: string, name: string}; // Thay vì 'ref: 'User'', vì TypeScript không hiểu được ref
}

const EventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    createAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true},
    startDateTime: {type: Date, default: Date.now},
    endDateTime: {type: Date, default: Date.now},
    price: {type: String},
    isFree: {type: Boolean, default: false},
    url: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Event = models.Event || model('Event', EventSchema)

export default Event