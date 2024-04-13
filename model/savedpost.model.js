import mongoose from 'mongoose'

const SavedPostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    }
}, { timestamps: true })

export const SavedPost = mongoose.model('SavedPost', SavedPostSchema);