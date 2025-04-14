import mongoose, { Schema} from "mongoose";

const ClassSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    teacher: {
        type: String,
    },

})
export default mongoose.model('Class',ClassSchema);