import mongoose from 'mongoose';

const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (error) {
        console.log('Error while connecting to database', error);
    }
};

export default Connection;
