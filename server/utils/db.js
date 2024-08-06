const { connect } = require('mongoose');

const dbConnection = async () => {
    try {
        await connect(process.env.MONGODB_URL);
        console.log('db connected!');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = dbConnection;
