const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./utils/db.js');
// const userRoutes = require('./router/user.router.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './utils/config.env' });

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['POST','GET','PUT','DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

dbConnection();

app.get('/', (req, res) => {
    res.send({ message: "here it is down to my legs" });
});

// app.use('/api/v1', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
