const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const announcementSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    skill: { type: String, required: true, maxlength: 50 },
    description: {type: String, required: true, maxlength: 250 },
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
})
const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;