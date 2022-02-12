import mongoose from 'mongoose';

const documentSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    data: {
        type: Object,
        required: true,
    },
});

export default mongoose.model('document', documentSchema);
